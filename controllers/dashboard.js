import customerSchema from '../models/customer.js';
import incomeExpensesSchema from '../models/incomeExpenses.js';
import productSchema from '../models/product.js';
import supplierSchema from '../models/supplier.js';

async function getDashboard(req, res, next){
   try {
        const dashboard = await incomeExpensesSchema.find();
        
        // Оновлено: Використовуємо ефективний метод countDocuments()
        const productsCount = await productSchema.countDocuments();
        const suppliersCount = await supplierSchema.countDocuments();
        const customersCount = await customerSchema.countDocuments();
        
        const customers = await customerSchema.find().sort({ register_date: -1 }).limit(5);
        
        // Повертаємо дані в обгортці 'data'
        res.json({ 
            status: "success",
            data: {
                allProducts: productsCount,
                allSuppliers: suppliersCount,
                allCustomers: customersCount,
                incomeExpenses: dashboard, 
                lastCustomers: customers, 
            }
        });
    } catch (error) {
        console.error("Dashboard Fetch Error:", error.message);
        next(error); 
    }

}
export {
    getDashboard
}
