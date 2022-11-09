import express from 'express';
const router = express.Router();

import {
  addBalance,
  getBalances,
  deleteBalance,
  editBalance,
  stats,
} from '../controllers/expenseIncomeController.js';
// auth
import auth from '../middleware/auth.js';

router.route('/').get(auth, getBalances).post(auth, addBalance);
router.route('/stats').get(auth, stats);
router.route('/:id').delete(auth, deleteBalance).patch(auth, editBalance);

export default router;
