import express from 'express';
const route = express.Router();

import { register, login, updateUser } from '../controllers/authController.js';
// auth
import auth from '../middleware/auth.js';
route.route('/register').post(register);
route.route('/login').post(login);
route.route('/updateUser').patch(auth, updateUser);

export default route;
