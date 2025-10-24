import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {
    type: String,
    enum: ['Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care'],
    required: true
},
    stock: { type: Number, required: true },
     suppliers:  { type: String, required: true },
    price: { type: Number, required: true },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Product', productSchema); 