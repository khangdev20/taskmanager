import { Router } from 'express';
import {
	addTask,
	deleteTask,
	getTasks,
	updateTask,
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = Router();

router.route('/').get(protect, getTasks).post(protect, addTask);
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask);

export default router;
