import CustomError from './customError.js';
import { StatusCodes } from 'http-status-codes';

class UnAuthenticated extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticated;
