"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCode = void 0;
exports.statusCode = {
    CREATED: 201,
    DELETED: 200,
    UPDATED: 200,
    DATA_AVAILABLE: 200,
    NO_CONTENT: 204,
    INVALID_REQUEST: 400,
    UNSUPPORTED_RESPONSE_TYPE: 400,
    INVALID_SCOPE: 400,
    INVALID_GRANT: 400,
    INVALID_CREDENTIALS: 400,
    INVALID_REFRESH: 400,
    NO_DATA: 400,
    INVALID_DATA: 400,
    ACCESS_DENIED: 401,
    UNAUTHORIZED: 401,
    INVALID_CLIENT: 401,
    FORBIDDEN: 403,
    RESOURCE_NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    RESOURCE_EXISTS: 409,
    CONFLICT: 400,
    RESOURCE_GONE: 410,
    PAYLOAD_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUESTS: 429,
    SERVER_ERROR: 500,
    UNSUPPORTED_GRANT_TYPE: 501,
    NOT_IMPLEMENTED: 501,
    TEMPORARILY_UNAVAILABLE: 503
};
