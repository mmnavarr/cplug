"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApiKey = void 0;
var nconf_1 = __importDefault(require("nconf"));
var fs_1 = __importDefault(require("fs"));
var got_1 = __importDefault(require("got"));
var httpClient = got_1.default.extend({
    prefixUrl: "https://data.messari.io/api"
});
// Setter fn to set api key in http client header
var setApiKey = function (apiKey) {
    httpClient.extend({
        headers: {
            "x-messari-api-key": apiKey
        }
    });
    console.log("API Key set in header");
    nconf_1.default.argv().env().file({ file: "./config.json" });
    // Store API key locally for subsequent commands/api calls
    nconf_1.default.set("apiKey", apiKey);
    nconf_1.default.save(function (error) {
        fs_1.default.readFile('./config.json', function (_, data) { return void console.dir(JSON.parse(data.toString())); });
        if (error)
            console.error(error);
    });
};
exports.setApiKey = setApiKey;
exports.default = httpClient;
