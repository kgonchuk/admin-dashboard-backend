import express from 'express'; 
const router = express.Router();
import * as OrderController from '../controllers/order.js';



router.get("/", OrderController.getOrders);





export default router;