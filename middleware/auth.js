import { UnAuthenticated } from '../errors/index.js';
import jwt from 'jsonwebtoken';
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticated('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];
  console.log('second one');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log('try');
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticated('Authentication invalid');
  }
};

export default auth;
