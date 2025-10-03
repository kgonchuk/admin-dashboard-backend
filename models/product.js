import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {
    type: String,
    enum: ['Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care'],
    required: true // Це мало б бути коректно.
},
    stock: { type: Number, required: true },
    suppliers:String,
    price: { type: Number, required: true },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Product', productSchema); 