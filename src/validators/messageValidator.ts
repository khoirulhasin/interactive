import { errorMessageEng } from '@constants/index';
import { body } from 'express-validator';

export const messageValidationRules = () => {
    return [
      body('message').isString().withMessage({
        message: errorMessageEng.IS_STRING
      }),
      // password must be at least 5 chars long
      body('message').isLength({ min: 5 }).withMessage({
        message: errorMessageEng.IS_LENGTH_MIN,
        params: {
            min: 5
        }
      }),
    ]
  }