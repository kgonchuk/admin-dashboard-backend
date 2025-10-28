import express from 'express'; 
const router = express.Router();
import * as DashboardController from '../controllers/dashboard.js';



router.get("/", DashboardController.getDashboard);





export default router;