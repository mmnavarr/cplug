"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_client_1 = __importDefault(require("../utils/http_client"));
var figlet_1 = __importDefault(require("figlet"));
var console_table_printer_1 = require("console-table-printer");
var format_1 = require("../utils/format");
var chalk_1 = __importDefault(require("chalk"));
var plugLending = function (assetKey) { return __awaiter(void 0, void 0, void 0, function () {
    var crypto_1, existLendRates, lendRates, _i, _a, _b, key, value, existBorrowRates, borrowRates, _c, _d, _e, key, value, loanData, error_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 2, , 3]);
                return [4 /*yield*/, http_client_1.default.get("v1/assets/" + assetKey + "/metrics?fields=id,symbol,name,lend_rates,borrow_rates,loan_data").json()];
            case 1:
                crypto_1 = (_f.sent()).data;
                console.log("🚀 ~ file: lending.ts ~ line 14 ~ plugLending ~ crypto", crypto_1);
                // Display asset name
                console.log(figlet_1.default.textSync(crypto_1.name, { font: "Sub-Zero" }));
                existLendRates = (Array.isArray(crypto_1.lend_rates) && crypto_1.lend_rates.length > 0);
                if (existLendRates) {
                    lendRates = new console_table_printer_1.Table({
                        title: "Lend Rates",
                        columns: [
                            { name: "platform", title: "Platform" },
                            { name: "rate", title: "Rate %", alignment: "right" }
                        ]
                    });
                    for (_i = 0, _a = Object.entries(crypto_1.lend_rates); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        lendRates.addRow({
                            platform: format_1.toUppercaseFirstLetter(key),
                            rate: format_1.toPercentageString(value)
                        });
                    }
                    lendRates.printTable();
                }
                else {
                    console.log(chalk_1.default.yellowBright("No lending data available for " + crypto_1.name + "."));
                }
                existBorrowRates = (Array.isArray(crypto_1.borrow_rates) && crypto_1.borrow_rates.length > 0);
                if (existBorrowRates) {
                    borrowRates = new console_table_printer_1.Table({
                        title: "Borrow Rates",
                        columns: [
                            { name: "platform", title: "Platform" },
                            { name: "rate", title: "Rate %", alignment: "right" }
                        ]
                    });
                    for (_c = 0, _d = Object.entries(crypto_1.borrow_rates); _c < _d.length; _c++) {
                        _e = _d[_c], key = _e[0], value = _e[1];
                        borrowRates.addRow({
                            platform: format_1.toUppercaseFirstLetter(key),
                            rate: format_1.toPercentageString(value)
                        });
                    }
                    borrowRates.printTable();
                }
                else {
                    console.log(chalk_1.default.yellowBright("No borrow data available for " + crypto_1.name + "."));
                }
                loanData = new console_table_printer_1.Table({
                    title: crypto_1.name + " Loan Data (USD)",
                    columns: [
                        { name: "originated_last_24_hours_usd", title: "Originated 24hr", alignment: "right" },
                        { name: "outstanding_debt_usd", title: "Outstanding Debt", alignment: "right" },
                        { name: "repaid_last_24_hours_usd", title: "Repaid Last 24hr", alignment: "right" },
                        { name: "collateralized_last_24_hours_usd", title: "Collateralized 24hr", alignment: "right" },
                        { name: "collateral_liquidated_last_24_hours_usd", title: "Collateralized Liquidated 24hr", alignment: "right" },
                    ]
                });
                loanData.addRow({
                    originated_last_24_hours_usd: format_1.toCommaDelimitedDollarWithCentsString(crypto_1.loan_data.originated_last_24_hours_usd),
                    outstanding_debt_usd: format_1.toCommaDelimitedDollarWithCentsString(crypto_1.loan_data.outstanding_debt_usd),
                    repaid_last_24_hours_usd: format_1.toCommaDelimitedDollarWithCentsString(crypto_1.loan_data.repaid_last_24_hours_usd),
                    collateralized_last_24_hours_usd: format_1.toCommaDelimitedDollarWithCentsString(crypto_1.loan_data.collateralized_last_24_hours_usd),
                    collateral_liquidated_last_24_hours_usd: format_1.toCommaDelimitedDollarWithCentsString(crypto_1.loan_data.collateral_liquidated_last_24_hours_usd),
                });
                loanData.printTable();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _f.sent();
                console.error(error_1.response.body);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = plugLending;
