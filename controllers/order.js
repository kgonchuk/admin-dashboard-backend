import orderSchema from '../models/order.js';

async function getOrders(req, res, next) {
    try{
    const orders= await orderSchema.find();
    res.send(orders);
    }catch(err){
     next(err)
    }
}

export { 
   getOrders
}