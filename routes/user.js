import express from 'express';
import {User} from '../model/user.js';
import { getAllUsers, registerUser, special, getUserById,updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/all',getAllUsers);

router.post('/new', registerUser);

router.get('/userid/special', special);

router.route('/userid/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default router;
