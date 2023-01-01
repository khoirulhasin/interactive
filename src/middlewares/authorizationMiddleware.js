"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // If the client does not send auth - header, send a 401 response
    if (token == null) {
        return res.badreq({ message: 'The request does not contain a valid access header' });
    }
    // res.locals is commonly used to store temporary request data
    jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err)
            return res.unauth({ message: 'You are not permitted to access this resource' });
        req.user = user;
        next();
    });
};
exports.validateUser = validateUser;
