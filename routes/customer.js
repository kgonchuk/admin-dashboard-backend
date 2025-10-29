import express from 'express'; 
const router = express.Router();
import * as CustomerController from '../controllers/customer.js';       
router.get("/", CustomerController.getCustomers);

export default router;