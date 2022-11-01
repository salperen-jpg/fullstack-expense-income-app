import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
const app = express();

import 'express-async-errors';
import connectDB from './db/connect.js';
import morgan from 'morgan';
// MIDDLEWARE IMPORTS
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
//ROUTE IMPORTS
import authRouter from './routes/authRoutes.js';
import balanceRouter from './routes/balanceRoutes.js';
// Routes

// middleware for json
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  return res.json({ msg: 'Welcome to server' });
});
app.get('/api/v1', (req, res) => {
  return res.json({ msg: 'Welcome ' });
});
app.get('/api/v1/v4', (req, res) => {
  return res.json({ msg: 'Welcome v4 ' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/balances', balanceRouter);

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

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
