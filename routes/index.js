import express from 'express';
const router = express.Router();

import productsRouter from './products.js';
import suppliersRouter from './suppliers.js';
import ordersRouter from './orders.js';


router.use("/products",productsRouter)
router.use("/suppliers",suppliersRouter)
router.use("/orders",ordersRouter)

export default router;