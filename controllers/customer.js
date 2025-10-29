import customerSchema from '../models/customer.js';
async function getCustomers(req, res, next) {
    try{
    const customers= await customerSchema.find();
    res.send(customers);
    }catch(err){
     next(err)
    }               
    
}
export { 
   getCustomers
}   