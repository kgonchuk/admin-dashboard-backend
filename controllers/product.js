import productSchema from '../models/product.js';

async function getProducts(req, res, next) {
    try{
    const product= await productSchema.find();
    res.send(product);
    }catch(err){
     next(err)
    }

   
}

async function createProducts(req, res, next) {

    try{
    const newProduct= await productSchema.create(req.body);
    console.log(newProduct);
    res.status(201).send(newProduct);
  }
catch(err){
next(err)
}
}

async function updateProduct(req, res, next) {
    const{ productId }=req.params;
    try{
const result = await productSchema.findByIdAndUpdate(productId, req.body, { new: true });
 if(result===null){
 res.status(404).send(`Product with id ${productId} not found`);
    }
    res.send(result);
    }catch(err){
        next(err)
    }
  
}

async function deleteProduct(req, res, next) {
    const { productId } = req.params;
    try{
        const deleteProduct = await productSchema.findByIdAndDelete(productId, { new: true });
        if(deleteProduct===null){
            res.status(404).send(`Product with id ${productId} not found`);
               }
        res.send(`Product with id ${productId} was deleted`);
      

    }catch(err){
        next(err)
    }
    

  
  }


// ✅ Експортуємо об'єкт з методами
export { 
    getProducts,
    createProducts,
    updateProduct,
    deleteProduct
};