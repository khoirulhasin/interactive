import express from 'express';
import { deleteProjectController, getProjectByIdController, getProjectsController, insertProjectController, updateProjectController } from '@controllers/projectController';
import { validate } from '@middlewares/validateMiddleware';
import { projectInsertValidationRules, projectDeleteValidationRules, projectUpdateValidationRules, projectGetByIdValidationRules} from '@validators/index'; 
import { validateAuth } from '@middlewares/authorizationMiddleware';

export const projectRoute = express.Router();

projectRoute.get('/', validateAuth, getProjectsController);
projectRoute.get('/:id', validateAuth, projectGetByIdValidationRules(), validate, getProjectByIdController);
projectRoute.post('/', validateAuth, projectInsertValidationRules(), validate, insertProjectController);
projectRoute.delete('/:id', validateAuth, projectDeleteValidationRules(), validate, deleteProjectController);
projectRoute.put('/:id', validateAuth, projectUpdateValidationRules(), validate, updateProjectController);