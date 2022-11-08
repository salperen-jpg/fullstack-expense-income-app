import Balance from '../Models/Balance.js';
import { BadRequest, NotFoundClass } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';
import checkPermissions from '../utils/checkPermissions.js';

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
  const balances = await Balance.find({ createdBy: userId });

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

export { addBalance, getBalances, deleteBalance, editBalance };
