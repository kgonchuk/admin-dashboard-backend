import express from 'express';
const router = express.Router();


import productsRouter from './products.js';
import suppliersRouter from './suppliers.js';
import ordersRouter from './orders.js';
import authRouter from './auth.js';
import dashboardRouter from './dashboard.js';


router.use("/products",productsRouter)
router.use("/suppliers",suppliersRouter)
router.use("/orders",ordersRouter)
router.use("/user",authRouter)
router.get("/dashboard",dashboardRouter )

export default router;