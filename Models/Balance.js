import mongoose from 'mongoose';

const BalanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    amount: {
      type: Number,
      required: [true, 'Please provide an amount.'],
      min: [1, 'Must be bigger than 0'],
    },
    balanceType: {
      type: 'String',
      enum: ['income', 'expense'],
      default: 'income',
    },
    description: {
      type: String,
      required: [true, 'Please provide the description.'],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide the user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Balance', BalanceSchema);
