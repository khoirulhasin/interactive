"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const messageRoute_1 = require("./messageRoute");
const userRoute_1 = require("./userRoute");
exports.routes = express_1.default.Router();
exports.routes.use('/message', messageRoute_1.messageRoute);
exports.routes.use('/users', userRoute_1.userRoute);
