import express from 'express';
import { getUsersController } from '@controllers/userController';

export const userRoute = express.Router();

userRoute.get('/index', getUsersController);


