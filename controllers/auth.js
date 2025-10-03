import userSchema from '../models/user.js';

async function registerUser(req, res, next) {
    try{
    const newUser= await userSchema.create(req.body);
    console.log(newUser);
    res.status(201).send(newUser);
  }
catch(err){
next(err)
}
}

async function loginUser(req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await userSchema.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }
        res.send('Login successful');
    } catch (err) {
        next(err);
    }
}

export { 
   registerUser,
   loginUser
}