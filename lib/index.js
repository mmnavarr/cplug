#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Message API Key: 9915e93a-6993-41f3-b241-bafe16beea47
var nconf_1 = __importDefault(require("nconf"));
var yargs_1 = __importDefault(require("yargs"));
// Utils
var http_client_1 = require("./utils/http_client");
// Commands
var market_data_1 = __importDefault(require("./commands/market_data"));
var asset_profile_1 = __importDefault(require("./commands/asset_profile"));
var all_time_high_1 = __importDefault(require("./commands/all_time_high"));
var lending_1 = __importDefault(require("./commands/lending"));
var developers_1 = __importDefault(require("./commands/developers"));
var news_1 = __importDefault(require("./commands/news"));
var roi_1 = __importDefault(require("./commands/roi"));
var blockchain_1 = __importDefault(require("./commands/blockchain"));
// Initialize nconf for local storage
nconf_1.default.argv().env().file({ file: "./config.json" });
nconf_1.default.defaults({ "apiKey": null });
nconf_1.default.save(function (error) {
    // fs.readFile('./config.json', (_, data) => void console.dir(JSON.parse(data.toString())));
    if (error)
        console.error(error);
});
var apiKey = nconf_1.default.get('apiKey');
var options = yargs_1.default
    .usage("Usage: $ cplug <option> <asset_key>")
    .option("init", { alias: "initialize", describe: "Messari API key", type: "string", demandOption: !apiKey })
    .option("a", { alias: "asset", describe: "Asset Key", type: "string" })
    .option("md", { alias: "market_data", describe: "Asset Key", type: "string" })
    // .option("me", { alias: "metrics", describe: "Asset Key", type: "string" })
    .option("ath", { alias: "alltimehigh", describe: "Asset Key", type: "string" })
    .option("lend", { alias: "lending", describe: "Asset Key", type: "string" })
    .option("chain", { alias: "blockchain", describe: "Asset Key", type: "string" })
    .option("roi", { describe: "Asset Key", type: "string" })
    .option("dev", { alias: "developers", describe: "Asset Key", type: "string" })
    .option("news", { describe: "Asset Key", type: "string" })
    .argv;
// Set API key in http client header and set is init flag to true
if (options.init) {
    http_client_1.setApiKey(options.init);
}
// Get asset profile
if (options.a) {
    asset_profile_1.default(options.a);
}
// Get market data for asset
if (options.md) {
    market_data_1.default(options.md);
}
// TODO: Get metrics for asset
// if (options.me) {
//   plugMetrics(options.me);
// }
// Get all time high data for asset
if (options.ath) {
    all_time_high_1.default(options.ath);
}
// Get lending & borrowing data for asset
if (options.lend) {
    lending_1.default(options.lend);
}
// Get fee data for asset
if (options.chain) {
    blockchain_1.default(options.chain);
}
// Get ROI data for asset
if (options.roi) {
    roi_1.default(options.roi);
}
// Get developer data for asset
if (options.dev) {
    developers_1.default(options.dev);
}
// Get news for asset
if (options.news) {
    news_1.default(options.news);
}
// TODO: Add yield for staking_stats, mining_stats, lending too?
