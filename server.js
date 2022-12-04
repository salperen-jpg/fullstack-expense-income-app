import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

import 'express-async-errors';
import connectDB from './db/connect.js';
import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// MIDDLEWARE IMPORTS

import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

//ROUTE IMPORTS

import authRouter from './routes/authRoutes.js';
import balanceRouter from './routes/balanceRoutes.js';
import cookieParser from 'cookie-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

// middleware for json
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(helmet()); //seceres headers
app.use(xss()); // sanitize the input => cross side atacks
app.use(mongoSanitize()); // sanitazing for mongo
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/balances', balanceRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'));
});

// MIDDLEWARES
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

// START FUNCTION
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
