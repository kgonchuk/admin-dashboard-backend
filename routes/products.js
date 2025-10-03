import express from 'express'; 
const router = express.Router();
import * as ProductController from '../controllers/product.js';
const jsonParser = express.json();

router.get("/", ProductController.getProducts )  

router.post("/",jsonParser,  ProductController.createProducts )  

router.put("/:productId", jsonParser, ProductController.updateProduct )

router.delete("/:productId", ProductController.deleteProduct ) 

export default router;
