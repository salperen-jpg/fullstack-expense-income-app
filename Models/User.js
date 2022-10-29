import mongoose from 'mongoose';
import validator from 'validator';
// name,email,password
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name can not be empty.'],
    trim: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide an email.',
    },
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Name can not be empty.'],
    minLength: 6,
  },
});

export default mongoose.model('user', UserSchema);
