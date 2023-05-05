import express from 'express';
import { deleteUserController, getUserByIdController, getUsersController, insertUserController, loginUserController, registerUserController, updateUserController } from '@controllers/userController';
import { validate } from '@middlewares/validateMiddleware';
import { userInsertValidationRules, userLoginValidationRules, userDeleteValidationRules, userRegisterValidationRules, userUpdateValidationRules, userGetByIdValidationRules} from '@validators/index'; 
import { validateAuth } from '@middlewares/authorizationMiddleware';

export const userRoute = express.Router();

userRoute.get('/', validateAuth, getUsersController);
userRoute.get('/:id', validateAuth, userGetByIdValidationRules(), validate, getUserByIdController);
userRoute.post('/', validateAuth, userInsertValidationRules(), validate, insertUserController);
userRoute.delete('/:id', validateAuth, userDeleteValidationRules(), validate, deleteUserController);
userRoute.post('/login', userLoginValidationRules(), validate, loginUserController);
userRoute.post('/register', userRegisterValidationRules(), validate, registerUserController);
userRoute.put('/:id', validateAuth, userUpdateValidationRules(), validate, updateUserController);