import e from 'express';
import mongoose from 'mongoose';
const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    adress: {
    type: String,
    required: true},
    products: { type: String, required: true },
    date:String,
    amount: { type: Number, required: true },
    status:{ type: String, enum: ['Active', 'Deactive'], required: true  },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Supplier', supplierSchema); 