import { Router } from 'express';
import { getUsers } from '../controllers/controller';

const router = Router();
router.get('/', getUsers);
export default router;
