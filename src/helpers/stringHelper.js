"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringInterpolate = void 0;
const stringInterpolate = (template, variables) => {
    return template.replace(new RegExp("\{([^\{]+)\}", "g"), function (_unused, varName) {
        return variables[varName];
    });
};
exports.stringInterpolate = stringInterpolate;
