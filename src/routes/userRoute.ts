import express from 'express';
import { getUsersController, insertUserController } from '@controllers/userController';

export const userRoute = express.Router();

userRoute.post('/index', getUsersController);
userRoute.post('/insert', insertUserController);


