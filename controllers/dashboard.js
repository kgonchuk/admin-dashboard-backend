
import dashboardSchema from '../models/order.js';

async function getDashboard(req, res, next) {
    try{
    const orders= await dashboardSchema.find();
    res.send(orders);
    }catch(err){
     next(err)
    }
}

export { 
   getDashboard
}