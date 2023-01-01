"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = void 0;
const path = (context) => {
    return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
};
exports.path = path;
