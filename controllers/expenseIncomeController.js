import Balance from '../Models/Balance.js';
import { BadRequest, NotFoundClass } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';
import checkPermissions from '../utils/checkPermissions.js';
import calculate from '../utils/calculateTotals.js';
// ADD BALANCE
const addBalance = async (req, res) => {
  const { name, amount, balanceType, description } = req.body;

  if (!name || !amount || !balanceType || !description) {
    throw new BadRequest('Provide all values');
  }

  req.body.createdBy = req.user.userId;
  const balance = await Balance.create(req.body);
  res.status(StatusCodes.CREATED).json({ balance });
};

// GET ALL BALANCES
const getBalances = async (req, res) => {
  const { userId } = req.user;
  // query params
  const { search, balanceType, sort, amount } = req.query;

  const queryObj = {
    createdBy: userId,
  };
  // BALANCE TYPE
  if (balanceType !== 'all') {
    queryObj.balanceType = balanceType;
  }
  // SEARCH
  if (search) {
    queryObj.name = { $regex: search, $options: 'i' };
  }
  // AMOUNT
  if (amount) {
    queryObj.amount = { $lte: amount };
  }
  // NO AWAIT INFRONT FOR CHAINING
  let result = Balance.find(queryObj);

  // sort chaining
  if (sort === 'newest') {
    result = result.sort({ createdAt: 'desc' });
  }
  if (sort === 'oldest') {
    result = result.sort({ createdAt: 'asc' });
  }
  if (sort === 'a-z') {
    result = result.sort({ name: 'asc' });
  }
  if (sort === 'z-a') {
    result = result.sort({ name: 'desc' });
  }

  const balances = await result;
  // const balancesAmount = balances.map((balance) => balance.amount);
  // const max = Math.max(...balancesAmount);

  res.status(StatusCodes.OK).json({
    balances,
    numOfBalances: balances.length,
    numOfPages: 1,
  });
};

const deleteBalance = async (req, res) => {
  const { id: balanceId } = req.params;

  const balance = await Balance.findOne({ _id: balanceId });
  if (!balance) {
    throw new BadRequest(`No balance with id of : ${balanceId}`);
  }

  checkPermissions(req.user, balance.createdBy);

  await Balance.findOneAndDelete({ _id: balanceId });
  // await job.remove() =>>>> alternative

  res.status(StatusCodes.OK).json({ balance });
};

const editBalance = async (req, res) => {
  const { id: balanceId } = req.params;
  const { name, amount, description, balanceType } = req.body;
  if (!name || !amount || !balanceType || !description) {
    throw new BadRequest('Provide all values');
  }

  const specificJob = await Balance.findOne({ _id: balanceId });
  if (!specificJob) {
    throw new NotFoundClass(`No balance with the id of ${balanceId}`);
  }

  checkPermissions(req.user, specificJob.createdBy);

  const updatedJob = await Balance.findOneAndUpdate(
    { _id: balanceId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedJob });
};

// overview
const stats = async (req, res) => {
  const { userId } = req.user;
  // getting income
  const incomes = await Balance.find({
    createdBy: userId,
    balanceType: 'income',
  });
  // expense
  const expenses = await Balance.find({
    createdBy: userId,
    balanceType: 'expense',
  });

  const incomeTotal = calculate(incomes);
  const expensesTotal = calculate(expenses);

  res.status(StatusCodes.OK).json({
    stats: [
      { name: 'Incomes', total: incomeTotal },
      { name: 'Expenses', total: expensesTotal },
    ],
    numOfExpenses: expenses.length,
    numOfIncomes: incomes.length,
  });
};

export { addBalance, getBalances, deleteBalance, editBalance, stats };
