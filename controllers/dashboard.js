import customerSchema from '../models/customer.js';
import incomeExpensesSchema from '../models/incomeExpenses.js';
import productSchema from '../models/product.js';
import supplierSchema from '../models/supplier.js';

async function getDashboard(req, res, next){
   try {
        const dashboard = await incomeExpensesSchema.find();
        
        // Використовуємо .estimatedDocumentCount() (для діагностики)
        const productsCount = await productSchema.find().estimatedDocumentCount();
        const suppliersCount = await supplierSchema.find().estimatedDocumentCount();
        const customersCount = await customerSchema.find().estimatedDocumentCount();
        
        const customers = await customerSchema.find().sort({ register_date: -1 }).limit(5);
        
        // КЛЮЧОВЕ ВИПРАВЛЕННЯ: Повертаємо дані в обгортці 'data'
        res.json({ 
            status: "success",
            data: {
                // Використовуємо імена полів, які очікує Redux Slice
                allProducts: productsCount,
                allSuppliers: suppliersCount,
                allCustomers: customersCount,
                // Використовуємо імена полів, які очікує Redux Slice
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
