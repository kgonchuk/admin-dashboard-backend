import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
    type: String,
    required: true},
    products: { type: String, required: true },
    date:String,
    price: { type: Number, required: true },
    status:{ type: String, enum: ['Completed', 'Confirmed', 'Pending', 'Cancelled', 'Processing'], required: true  },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Order', orderSchema); 