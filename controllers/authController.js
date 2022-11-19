import User from '../Models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest, UnAuthenticated } from '../errors/index.js';
import attachCookies from '../utils/attachCookies.js';

// REGISTER
const register = async (req, res) => {
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

  // Cookie setup
  attachCookies({ token, res });

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

  // Cookie setup
  attachCookies({ token, res });

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email, token } });
};

// UPDATE
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    throw new BadRequest('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  // update values
  user.name = name;
  user.email = email;

  // check this later on
  await user.save();

  const token = user.createJWT();

  // Cookie setup
  attachCookies({ token, res });

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email, token } });
};

export { register, login, updateUser };
