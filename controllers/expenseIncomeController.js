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

const getBalances = async (req, res) => {
  res.send('Get balance');
};

const deleteBalance = async (req, res) => {
  res.send('delete balance');
};

const editBalance = async (req, res) => {
  res.send('Edit balance');
};

export { addBalance, getBalances, deleteBalance, editBalance };
