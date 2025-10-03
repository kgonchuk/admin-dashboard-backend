import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;
console.log('Using DB URI:', DB_URI);

mongoose.connect(DB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB. Details:', err.message, err); 
  process.exit(1);
});

 export default mongoose; 