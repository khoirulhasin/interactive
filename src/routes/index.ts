import express from 'express';
import  { messageRoute }  from './messageRoute';
import  { userRoute }  from './userRoute';

export const routes = express.Router();

routes.use('/messages', messageRoute);
routes.use('/users', userRoute);
