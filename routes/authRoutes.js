import express from 'express';
const route = express.Router();

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15MIN
  max: 10,
  message: 'Please wait for 15 min , and try again ',
});

import { register, login, updateUser } from '../controllers/authController.js';
// auth
import auth from '../middleware/auth.js';
route.route('/register').post(apiLimiter, register);
route.route('/login').post(apiLimiter, login);
route.route('/updateUser').patch(auth, updateUser);

export default route;
