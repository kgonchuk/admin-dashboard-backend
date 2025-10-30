import mongoose from 'mongoose';
const customerSchema = new mongoose.Schema({
    photo: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {type: String,required: true},
    date: { type: Date, required: true },
    phone: { type: Number, required: true },
   spent: {
      type: Number,
      min: 0,
      required: [true, 'Spent is required']
    },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Customer', customerSchema); 