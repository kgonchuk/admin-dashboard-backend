import Suplier from "../models/supplier.js"

async function getSuplliers(req, res, next) {
    try{
    const supllier= await Suplier.find();
    res.send(supllier);
    }catch(err){
     next(err)
    }
}

async function createSuplliers(req, res, next) {
    try{
         console.log("Received Data:", req.body);
    const newSupllier= await Suplier.create(req.body);
    console.log("Create suplier:",newSupllier);
    res.status(201).json(newSupllier);
  }
catch(err){
       console.error("Mongoose/Controller Error:", error); 
    console.log("Error creating suplier:", err);
next(err)
}
}

async function updateSupllier(req, res, next) {
    const{ supplierId }=req.params;
    try{
const result = await Suplier.findByIdAndUpdate(supplierId, req.body, { new: true });
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