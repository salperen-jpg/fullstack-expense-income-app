import mongoose from 'mongoose';
// name,email,password
const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name can not be empty.'],
    trim: true,
    maxLength: [20, 'Can not be longer than 20.'],
  },
  email: {
    type: String,
    required: [true, 'Email can not be empty.'],
    trim: true,
    maxLength: [40, 'Can not be longer than 40.'],
  },
  password: {
    type: String,
    required: [true, 'Name can not be empty.'],
    trim: true,
    maxLength: [20, 'Can not be longer than 20.'],
  },
});
