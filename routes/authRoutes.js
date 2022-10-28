import express from 'express';
const route = express.Router();

import { register, login, updateUser } from '../controllers/authController.js';

route.route('/register').post(register);
route.route('/login').post(login);
route.route('/updateUser').patch(updateUser);

export default route;
