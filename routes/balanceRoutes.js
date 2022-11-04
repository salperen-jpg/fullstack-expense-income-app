import express from 'express';
const router = express.Router();

import {
  addBalance,
  getBalances,
  deleteBalance,
  editBalance,
} from '../controllers/expenseIncomeController.js';
// auth
import auth from '../middleware/auth.js';

router.route('/').get(auth, getBalances).post(auth, addBalance);
router.route('/:id').delete(auth, deleteBalance).patch(auth, editBalance);

export default router;
