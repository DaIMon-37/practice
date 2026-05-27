import express from 'express';
import {User} from '../model/user.js';
import { getAllUsers, register, login, logout, getMyDetails} from '../controllers/user.js';
import {isAuthenticated} from '../middlewares/auth.js';

const router = express.Router();

router.get('/all',getAllUsers);

router.post('/new', register);

router.post('/login', login);

router.get('/logout', logout);

router.get('/me', isAuthenticated, getMyDetails);

export default router;
