import mongoose from 'mongoose';
const dashboardSchema = new mongoose.Schema({
  _id: {
        type: ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Income", "Expense", "Error"],
        required: true,
    }


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('Dashboard', dashboardSchema); 