import User from '../Models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../errors/index.js';
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest('Please provide all values.');
  }
  const emailInTheUse = await User.findOne({ email });
  if (emailInTheUse) {
    throw new Error('Email is already use');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
};
const login = async (req, res) => {
  res.send('login');
};
const updateUser = async (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
