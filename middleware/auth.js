import { UnAuthenticated } from '../errors/index.js';
import jwt from 'jsonwebtoken';
const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new UnAuthenticated('Authentication invalid');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticated('Authentication invalid');
  }
};

export default auth;
