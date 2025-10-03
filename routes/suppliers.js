import express from 'express'; 
const router = express.Router();
import * as SupplierController from '../controllers/supplier.js';

const jsonParser = express.json();

router.get("/", SupplierController.getSuplliers )  

router.post("/",    jsonParser,  SupplierController.createSuplliers )  

router.put("/:supplierId", jsonParser, SupplierController.updateSupllier )



export default router;