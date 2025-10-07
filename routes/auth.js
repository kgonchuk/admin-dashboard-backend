import express from 'express'; 
const router = express.Router();
import * as LoginController from '../controllers/auth.js';
import * as RegisterController from '../controllers/auth.js';
import authenticate from '../middlewares/authenticate.js';
import * as LogoutController from '../controllers/auth.js';
import * as authController from '../controllers/auth.js';




router.post('/register',RegisterController.registerUser);
router.post('/login',LoginController.loginUser);
router.post('/logout', authenticate,LogoutController.logoutUser);
router.post('/refresh', authController.refresh);







export default router;