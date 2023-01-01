// https://github.com/validatorjs/validator.js#validators

import { validationResult } from 'express-validator';
import { stringInterpolate } from '@helpers/stringHelper';

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg.message ? stringInterpolate(err.msg.message, {...{field: err.param}, ...err.msg.params}) : 'Invalid value' }))
    return res.badreq({
      errors: extractedErrors
    })
  }