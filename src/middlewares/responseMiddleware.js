"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const index_1 = require("@constants/index");
const index_2 = require("@helpers/index");
const response = (_, res, next) => {
    /**
     * (default status 200)
     * Success response
     */
    res.success = ({ result = {}, code = index_1.statusCode.DATA_AVAILABLE, message = '' }) => {
        return res.json({
            result,
            code,
            message,
            timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss')
        });
    };
    /**
     * Custom error response
     */
    res.error = ({ errors = {}, code = index_1.statusCode.UNSUPPORTED_RESPONSE_TYPE, message = '', result = {} }) => {
        return res.json({
            errors,
            code,
            message,
            result,
            timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss')
        });
    };
    /**
     * (status 403)
     * Bad request response
     */
    res.badreq = ({ errors = {}, code = index_1.statusCode.INVALID_REQUEST, message = '', result = {} }) => {
        return res.status(index_1.statusCode.INVALID_REQUEST).error({ errors, code, message, result, timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss') });
    };
    /**
     * (status 403)
     * Forbidden request response
     */
    res.forbidden = ({ errors = {}, code = index_1.statusCode.FORBIDDEN, message = '', result = {} }) => {
        return res.status(index_1.statusCode.FORBIDDEN).error({ errors, code, message, result, timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss') });
    };
    /**
     * (status 401)
     * Unauthorize request response
     */
    res.unauth = ({ errors = {}, code = index_1.statusCode.ACCESS_DENIED, message = '', result = {} }) => {
        return res.status(index_1.statusCode.ACCESS_DENIED).error({ errors, code, message, result, timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss') });
    };
    /**
     * (status 500)
     * Internal request response
     */
    res.internal = ({ errors = {}, code = index_1.statusCode.SERVER_ERROR, message = '', result = {} }) => {
        return res.status(index_1.statusCode.SERVER_ERROR).error({ errors, code, message, result, timeStamp: (0, index_2.dateTimeFormatNow)('yyyy-MM-dd HH:mm:ss') });
    };
    next();
};
exports.response = response;
