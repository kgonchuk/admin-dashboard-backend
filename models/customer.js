import mongoose from 'mongoose';
const customerSchema = new mongoose.Schema({
    photo: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {type: String,required: true},
    date: { type: Date, required: true },
    phone: { type: Number, required: true },



},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Customer', customerSchema); 