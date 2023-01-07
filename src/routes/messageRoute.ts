import express from 'express';
import * as messageController from '@controllers/messageController';
import { messageValidationRules} from '@validators/index'; 
import { validate } from '@middlewares/index';

export const messageRoute = express.Router();

messageRoute.post('/index', messageValidationRules(), validate, messageController.messageIndex);


