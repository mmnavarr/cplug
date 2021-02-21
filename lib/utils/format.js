"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUppercaseFirstLetter = exports.toSatoshiPrecisionString = exports.toPercentageString = exports.toCommaDelimitedString = exports.toCommaDelimitedDollarWithCentsString = void 0;
var numeral_1 = __importDefault(require("numeral"));
var toCommaDelimitedDollarWithCentsString = function (number) { return numeral_1.default(number).format("$0,0.00"); };
exports.toCommaDelimitedDollarWithCentsString = toCommaDelimitedDollarWithCentsString;
var toCommaDelimitedString = function (number) { return numeral_1.default(number).format("0,0"); };
exports.toCommaDelimitedString = toCommaDelimitedString;
var toPercentageString = function (number) { return numeral_1.default(number / 100).format("0,0.00%"); };
exports.toPercentageString = toPercentageString;
var toSatoshiPrecisionString = function (number) { return numeral_1.default(number).format("0,0.00000000"); };
exports.toSatoshiPrecisionString = toSatoshiPrecisionString;
var toUppercaseFirstLetter = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
exports.toUppercaseFirstLetter = toUppercaseFirstLetter;
