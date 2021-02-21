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
var figures_1 = __importDefault(require("figures"));
var console_table_printer_1 = require("console-table-printer");
var format_1 = require("../utils/format");
var plugDevelopers = function (assetKey) { return __awaiter(void 0, void 0, void 0, function () {
    var crypto_1, developerTable, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, http_client_1.default.get("v1/assets/" + assetKey + "/metrics?fields=id,symbol,name,developer_activity").json()];
            case 1:
                crypto_1 = (_a.sent()).data;
                developerTable = new console_table_printer_1.Table({
                    title: crypto_1.name + " GitHub Statistics",
                    columns: [
                        { name: "stars", title: "Stars " + figures_1.default.star, alignment: "right" },
                        { name: "watchers", title: "Watchers", alignment: "right" },
                        { name: "commits_last_3_months", title: "Commits (3mo)", alignment: "right" },
                        { name: "commits_last_1_year", title: "Commits (1yr)", alignment: "right" },
                        { name: "lines_added_last_3_months", title: "Lines Added (3mo)", alignment: "right" },
                        { name: "lines_added_last_1_year", title: "Lines Added (1)", alignment: "right" },
                        { name: "lines_deleted_last_3_months", title: "Lines Deleted (3mo)", alignment: "right" },
                        { name: "lines_deleted_last_1_year", title: "Lines Deleted (1yr)", alignment: "right" },
                    ]
                });
                developerTable.addRows([
                    {
                        stars: format_1.toCommaDelimitedString(crypto_1.developer_activity.stars),
                        watchers: format_1.toCommaDelimitedString(crypto_1.developer_activity.watchers),
                        commits_last_3_months: format_1.toCommaDelimitedString(crypto_1.developer_activity.commits_last_3_months),
                        commits_last_1_year: format_1.toCommaDelimitedString(crypto_1.developer_activity.commits_last_1_year),
                        lines_added_last_3_months: format_1.toCommaDelimitedString(crypto_1.developer_activity.lines_added_last_3_months),
                        lines_added_last_1_year: format_1.toCommaDelimitedString(crypto_1.developer_activity.lines_added_last_1_year),
                        lines_deleted_last_3_months: format_1.toCommaDelimitedString(crypto_1.developer_activity.lines_deleted_last_3_months),
                        lines_deleted_last_1_year: format_1.toCommaDelimitedString(crypto_1.developer_activity.lines_deleted_last_1_year),
                    }
                ]);
                developerTable.printTable();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.response.body);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = plugDevelopers;
