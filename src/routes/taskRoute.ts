import express from 'express';
import { deleteTaskController, getTaskByIdController, getTasksController, insertTaskController, updateTaskController } from '@controllers/taskController';
import { validate } from '@middlewares/validateMiddleware';
import { taskInsertValidationRules, taskDeleteValidationRules, taskUpdateValidationRules, taskGetByIdValidationRules} from '@validators/index'; 
import { validateAuth } from '@middlewares/authorizationMiddleware';

export const taskRoute = express.Router();

taskRoute.get('/', validateAuth, getTasksController);
taskRoute.get('/:id', validateAuth, taskGetByIdValidationRules(), validate, getTaskByIdController);
taskRoute.post('/', validateAuth, taskInsertValidationRules(), validate, insertTaskController);
taskRoute.delete('/:id', validateAuth, taskDeleteValidationRules(), validate, deleteTaskController);
taskRoute.put('/:id', validateAuth, taskUpdateValidationRules(), validate, updateTaskController);