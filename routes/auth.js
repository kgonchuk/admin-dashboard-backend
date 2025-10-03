import express from 'express'; 
const router = express.Router();
import * as LoginController from '../controllers/auth.js';
import * as RegisterController from '../controllers/auth.js';

const jsonParser = express.json();




router.post('/register',jsonParser,RegisterController.registerUser);





export default router;