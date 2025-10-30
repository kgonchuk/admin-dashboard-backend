import mongoose from 'mongoose';
const incomeExpensesSchema = new mongoose.Schema({
     name: { type: String, required: true },
  amount: { type: String, required: true },
  type: { type: String, required: true, enum: ['Income', 'Expense', 'Error'] },


},
{  versionKey:false  ,timestamps: true}
);

export default mongoose.model('IncomeExpenses', incomeExpensesSchema); 