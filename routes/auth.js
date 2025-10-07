import express from 'express'; 
const router = express.Router();

import * as authController from '../controllers/auth.js';
import authenticate from '../middlewares/authenticate.js';


router.post('/register',authController.registerUser);
router.post('/login',authController.loginUser);
router.post('/logout', authenticate,authController.logoutUser);
router.post('/refresh', authController.refresh);







export default router;