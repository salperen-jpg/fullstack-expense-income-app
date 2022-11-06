import Balance from '../Models/Balance.js';
import { BadRequest } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

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
  console.log(balances);
  res.status(StatusCodes.OK).json({
    balances,
    numOfBalances: balances.length,
    numOfPages: 1,
  });
};

const deleteBalance = async (req, res) => {
  res.send('delete balance');
};

const editBalance = async (req, res) => {
  res.send('Edit balance');
};

export { addBalance, getBalances, deleteBalance, editBalance };
