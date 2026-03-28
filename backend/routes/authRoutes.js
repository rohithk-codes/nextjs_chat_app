import express from 'express';
import authController from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);

export default router;  