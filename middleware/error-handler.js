import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong,try again later',
  };
  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((e) => e.message)
      .join(',');
    console.log(Object.values(err.errors).length);
  }
  if (err?.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field is already in use`;
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
