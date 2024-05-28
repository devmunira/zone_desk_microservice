import { Router } from 'express';
import { userController } from '@controllers/index';
const { createUser, updateUserProfile, deleteUser } = userController;

const router = Router();

router.post('/users', createUser);
router.put('/users', updateUserProfile);
router.delete('/users', deleteUser);

export default router;
