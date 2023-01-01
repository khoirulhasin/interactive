"use strict";
// https://github.com/validatorjs/validator.js#validators
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const stringHelper_1 = require("@helpers/stringHelper");
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg.message ? (0, stringHelper_1.stringInterpolate)(err.msg.message, Object.assign({ field: err.param }, err.msg.params)) : 'Invalid value' }));
    return res.badreq({
        errors: extractedErrors
    });
};
exports.validate = validate;
