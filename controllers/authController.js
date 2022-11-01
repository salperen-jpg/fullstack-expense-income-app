import User from '../Models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../errors/index.js';

// REGISTER
const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest('Please provide all values.');
  }
  const emailInTheUse = await User.findOne({ email });
  if (emailInTheUse) {
    throw new BadRequest('Email is already use');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name, email: user.email, token } });
};
// LOGIN
const login = async (req, res) => {
  res.send('login');
};

// UPDATE
const updateUser = async (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
