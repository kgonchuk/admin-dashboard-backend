import supllierSchems from "../models/supplier.js"

async function getSuplliers(req, res, next) {
    try{
    const supllier= await supllierSchems.find();
    res.send(supllier);
    }catch(err){
     next(err)
    }
}

async function createSuplliers(req, res, next) {
    try{
    const newSupllier= await supllierSchems.create(req.body);
    console.log(newSupllier);
    res.status(201).send(newSupllier);
  }
catch(err){
next(err)
}
}

async function updateSupllier(req, res, next) {
    const{ supplierId }=req.params;
    try{
const result = await supllierSchems.findByIdAndUpdate(supplierId, req.body, { new: true });
 if(result===null){
 res.status(404).send(`Supplier with id ${supplierId} not found`);
    }
    res.send(result);
    }catch(err){
        next(err)
    }
}

export { 
   getSuplliers,
   createSuplliers,
   updateSupllier
}