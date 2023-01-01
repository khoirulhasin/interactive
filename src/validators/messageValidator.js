"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageValidationRules = void 0;
const index_1 = require("@constants/index");
const express_validator_1 = require("express-validator");
const messageValidationRules = () => {
    return [
        (0, express_validator_1.body)('message').isString().withMessage({
            message: index_1.errorMessageEng.IS_STRING
        }),
        // password must be at least 5 chars long
        (0, express_validator_1.body)('message').isLength({ min: 5 }).withMessage({
            message: index_1.errorMessageEng.IS_LENGTH_MIN,
            params: {
                min: 5
            }
        }),
    ];
};
exports.messageValidationRules = messageValidationRules;
