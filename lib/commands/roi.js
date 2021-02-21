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
var console_table_printer_1 = require("console-table-printer");
var format_1 = require("../utils/format");
var plugROI = function (assetKey) { return __awaiter(void 0, void 0, void 0, function () {
    var crypto_1, usdROI, cryptoROI, yearlyROI, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, http_client_1.default.get("v1/assets/" + assetKey + "/metrics?fields=id,symbol,name,roi_data,roi_by_year").json()];
            case 1:
                crypto_1 = (_a.sent()).data;
                usdROI = new console_table_printer_1.Table({
                    title: crypto_1.name + " RIO Data (USD)",
                    columns: [
                        { name: "percent_change_last_1_week", title: "%Δ (1w)", alignment: "right" },
                        { name: "percent_change_last_1_month", title: "%Δ (1m)", alignment: "right" },
                        { name: "percent_change_last_3_months", title: "%Δ (3m)", alignment: "right" },
                        { name: "percent_change_last_1_year", title: "%Δ (1y)", alignment: "right" },
                        { name: "percent_change_month_to_date", title: "%Δ MTD", alignment: "right" },
                        { name: "percent_change_quarter_to_date", title: "%Δ QTD", alignment: "right" },
                        { name: "percent_change_year_to_date", title: "%Δ YTD", alignment: "right" },
                    ]
                });
                usdROI.addRow({
                    percent_change_last_1_week: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_last_1_week),
                    percent_change_last_1_month: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_last_1_month),
                    percent_change_last_3_months: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_last_3_months),
                    percent_change_last_1_year: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_last_1_year),
                    percent_change_month_to_date: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_month_to_date),
                    percent_change_quarter_to_date: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_quarter_to_date),
                    percent_change_year_to_date: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_year_to_date),
                });
                usdROI.printTable();
                cryptoROI = new console_table_printer_1.Table({
                    title: crypto_1.name + " RIO Data (BTC & ETH)",
                    columns: [
                        { name: "percent_change_btc_last_1_week", title: "BTC %Δ (1w)", alignment: "right" },
                        { name: "percent_change_btc_last_1_month", title: "BTC %Δ (1m)", alignment: "right" },
                        { name: "percent_change_btc_last_3_months", title: "BTC %Δ (3m)", alignment: "right" },
                        { name: "percent_change_btc_last_1_year", title: "BTC %Δ (1y)", alignment: "right" },
                        { name: "percent_change_eth_last_1_week", title: "ETH %Δ (1w)", alignment: "right" },
                        { name: "percent_change_eth_last_1_month", title: "ETH %Δ (1m)", alignment: "right" },
                        { name: "percent_change_eth_last_3_months", title: "ETH %Δ (3m)", alignment: "right" },
                        { name: "percent_change_eth_last_1_year", title: "ETH %Δ (1y)", alignment: "right" },
                    ]
                });
                cryptoROI.addRow({
                    percent_change_btc_last_1_week: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_btc_last_1_week),
                    percent_change_btc_last_1_month: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_btc_last_1_month),
                    percent_change_btc_last_3_months: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_btc_last_3_months),
                    percent_change_btc_last_1_year: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_btc_last_1_year),
                    percent_change_eth_last_1_week: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_eth_last_1_week),
                    percent_change_eth_last_1_month: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_eth_last_1_month),
                    percent_change_eth_last_3_months: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_eth_last_3_months),
                    percent_change_eth_last_1_year: format_1.toCommaDelimitedString(crypto_1.roi_data.percent_change_eth_last_1_year),
                });
                cryptoROI.printTable();
                yearlyROI = new console_table_printer_1.Table({
                    title: crypto_1.name + " RIO By Year (USD)",
                    columns: [
                        { name: "2020_usd_percent", title: "2020 %Δ", alignment: "right" },
                        { name: "2019_usd_percent", title: "2019 %Δ", alignment: "right" },
                        { name: "2018_usd_percent", title: "2018 %Δ", alignment: "right" },
                        { name: "2017_usd_percent", title: "2017 %Δ", alignment: "right" },
                        { name: "2016_usd_percent", title: "2016 %Δ", alignment: "right" },
                        { name: "2015_usd_percent", title: "2015 %Δ", alignment: "right" },
                        { name: "2014_usd_percent", title: "2014 %Δ", alignment: "right" },
                        { name: "2013_usd_percent", title: "2013 %Δ", alignment: "right" },
                        { name: "2012_usd_percent", title: "2012 %Δ", alignment: "right" },
                        { name: "2011_usd_percent", title: "2011 %Δ", alignment: "right" },
                    ]
                });
                yearlyROI.addRow({
                    '2020_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2020_usd_percent"]),
                    '2019_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2019_usd_percent"]),
                    '2018_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2018_usd_percent"]),
                    '2017_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2017_usd_percent"]),
                    '2016_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2016_usd_percent"]),
                    '2015_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2015_usd_percent"]),
                    '2014_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2014_usd_percent"]),
                    '2013_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2013_usd_percent"]),
                    '2012_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2012_usd_percent"]),
                    '2011_usd_percent': format_1.toCommaDelimitedString(crypto_1.roi_by_year["2011_usd_percent"]),
                });
                yearlyROI.printTable();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.response.body);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = plugROI;
