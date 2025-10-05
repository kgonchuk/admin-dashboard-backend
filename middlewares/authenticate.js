import jwt, { decode } from 'jsonwebtoken';
import User from '../models/user.js';
export function authenticate(req, res, next) {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const [baerer, token] = authHeader.split(' ', 2);
    if (baerer !== 'Bearer') {
        return res.status(401).json({ message: "Invalid token" });
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => { 
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        try{
            res.req.user=decoded;
            const user= await User.findById(decoded.id).exec();
            if(!user || user.token!==token){
                return res.status(401).json({ message: "Invalid token" });
            }
req.user={id: user._id, name: user.name};
            next();
        }catch(err){
            return res.status(401).json({ message: "Invalid token" });
        }
})
       
    };
   
export default authenticate;