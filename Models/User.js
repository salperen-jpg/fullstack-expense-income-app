import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// name,email,password
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email.',
    },
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minLength: 6,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env_JWT_SECRET, {
    expiresIn: process.env_JWT_LIFETIME,
  });
};

export default mongoose.model('user', UserSchema);
