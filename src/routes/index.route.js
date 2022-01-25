import { Router } from  'express';
const router = Router();
import foodRoutes from './food.route';

router.use('/food', foodRoutes);

export default router;