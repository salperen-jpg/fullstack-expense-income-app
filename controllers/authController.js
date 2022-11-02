import User from '../Models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest, UnAuthenticated } from '../errors/index.js';

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
  const { password, email } = req.body;
  if (!password || !email) {
    throw new BadRequest('Please provide all values');
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new UnAuthenticated('Invalid Credentials!!!');
  }

  const passwordIsMatched = await user.comparePassword(password);

  if (!passwordIsMatched) {
    throw new UnAuthenticated('Unauthorized!!!');
  }
  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email, token } });
};

// UPDATE
const updateUser = async (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
