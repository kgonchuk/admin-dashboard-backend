import customerSchema from '../models/customer.js';
import incomeExpensesSchema from '../models/incomeExpenses.js';
import productSchema from '../models/product.js';
import supplierSchema from '../models/supplier.js';

async function getDashboard(req, res, next){
   const dashboard = await incomeExpensesSchema.find();
    const productsCount = await productSchema.countDocuments();
    const suppliersCount = await supplierSchema.countDocuments();
    const customersCount = await customerSchema.countDocuments();
    const customers = await customerSchema.find().sort({ register_date: -1 }).limit(5);
    res.json({ dashboard, productsCount, suppliersCount, customersCount, customers });

}
export {
    getDashboard
}