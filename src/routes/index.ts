import express from 'express';
import  { userRoute }  from './userRoute';
import { projectRoute } from './projectRoute';
import { taskRoute } from './taskRoute';

export const routes = express.Router();

routes.use('/users', userRoute);
routes.use('/projects', projectRoute);
routes.use('/tasks', taskRoute);
