
import mongoose from 'mongoose';
const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    adress: {
    type: String,
    required: true},
    company: { type: String, required: true },
   date: { type: Date, required: true },
    amount: { type: Number, required: true },
    status:{ type: String, enum: ['Active', 'Deactive'], required: true  },



},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Supplier', supplierSchema); 