import { Router } from 'express';
import { addFood, deleteFood, getAllFood, getFood, updateFood } from '../controllers/food.controller';



const router = Router();

router.get('/', getAllFood);
router.get('/:_id', getFood);
router.put('/edit/:_id', updateFood);
router.post('/add', addFood);
router.delete('/delete/:_id', deleteFood);


export default router;