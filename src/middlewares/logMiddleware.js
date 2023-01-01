"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLog = exports.accessLog = void 0;
const accessLog = (req, _, next) => {
    const { hostname, method, path, ip, protocol } = req;
    console.log(`ACCESS: ${method} ${protocol}://${hostname}${path} - ${ip}`);
    next();
};
exports.accessLog = accessLog;
const errorLog = (err, req, res, _) => {
    const { hostname, method, path, protocol } = req;
    console.log(`ERROR: ${method} ${protocol}://${hostname}${path} - ${err}`);
    // next(); // you can call either next or send a uniform error response
    res.internal({ message: err.message });
};
exports.errorLog = errorLog;
