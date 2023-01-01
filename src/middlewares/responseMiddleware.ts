import { statusCode } from '@constants/index';
import { dateTimeFormatNow } from '@helpers/index';

export const response = (_, res, next) => {

    /**
     * (default status 200)
     * Success response
     */
    res.success =  ({ result = {}, code = statusCode.DATA_AVAILABLE, message = ''}) => {
        return res.json({
            result,
            code,
            message,
            timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss')
        })
    }

    /**
     * Custom error response
     */
    res.error = ({ errors = {}, code = statusCode.UNSUPPORTED_RESPONSE_TYPE, message = '', result= {} }) => {
        return res.json({
            errors,
            code,
            message,
            result,
            timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss')
        })
    }

    /**
     * (status 403)
     * Bad request response
     */
    res.badreq = ({ errors = {}, code = statusCode.INVALID_REQUEST, message = '', result = {} }) => {
        return res.status(statusCode.INVALID_REQUEST).error({ errors, code, message, result,  timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss') })
    }

    /**
     * (status 403)
     * Forbidden request response
     */
    res.forbidden = ({ errors = {}, code = statusCode.FORBIDDEN, message = '', result = {}}) => {
        return res.status(statusCode.FORBIDDEN).error({ errors, code, message, result,  timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss') })
    }
    
    /**
     * (status 401)
     * Unauthorize request response
     */
    res.unauth = ({ errors = {}, code = statusCode.ACCESS_DENIED, message = '', result= {} }) => {
        return res.status(statusCode.ACCESS_DENIED).error({ errors, code, message, result, timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss') })
    }

    /**
     * (status 500)
     * Internal request response
     */
    res.internal = ({ errors = {}, code = statusCode.SERVER_ERROR, message = '', result = {}}) => {
        return res.status(statusCode.SERVER_ERROR).error({ errors, code, message, result,  timeStamp: dateTimeFormatNow('yyyy-MM-dd HH:mm:ss') })
    }

    next()
}