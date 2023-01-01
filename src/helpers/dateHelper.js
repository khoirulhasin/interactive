"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTimeFormatNow = exports.dateTimeFormat = void 0;
const date_fns_1 = require("date-fns");
const dateTimeFormat = (dateTime, formatDate) => {
    return (0, date_fns_1.format)(dateTime, formatDate);
};
exports.dateTimeFormat = dateTimeFormat;
const dateTimeFormatNow = (formatDate) => {
    return (0, exports.dateTimeFormat)(new Date(), formatDate);
};
exports.dateTimeFormatNow = dateTimeFormatNow;
