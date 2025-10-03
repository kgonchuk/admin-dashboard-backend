import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: {
      type: String,
      required: [true, 'Email is required']
    },
    password: {
      type: String,
      minlength: 8, // here will be hashed password, because we use pattern only for joi
      required: [true, 'Set password for user']
    },
    accessToken: {
      type: String,
      default: ''
    },
    refreshToken: {
      type: String,
      default: ''
    }


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('User', userSchema); 