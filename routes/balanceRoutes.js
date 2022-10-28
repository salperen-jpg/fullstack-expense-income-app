import express from 'express';
const router = express.Router();

import {
  addBalance,
  getBalances,
  deleteBalance,
  editBalance,
} from '../controllers/expenseIncomeController.js';

router.route('/').get(getBalances).post(addBalance);
router.route('/:id').delete(deleteBalance).patch(editBalance);

export default router;
