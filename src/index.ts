#!/usr/bin/env node
import nconf from "nconf";
import yargs from "yargs";

// Utils
import { setApiKey } from "./utils/http_client";

// Commands
import plugMarketData from "./commands/market_data";
import plugAssetProfile from "./commands/asset_profile";
// import plugMetrics from "./commands/metrics";
import plugAllTimeHigh from "./commands/all_time_high";
import plugLending from "./commands/lending";
import plugDevelopers from "./commands/developers";
import plugNews from "./commands/news";
import plugROI from "./commands/roi";
import plugBlockchain from "./commands/blockchain";


// Initialize nconf for local storage
nconf.argv().env().file({ file: "./config.json" });
nconf.defaults({ "apiKey": null });

nconf.save((error: Error) => {
  if (error) console.error(error);
});

const apiKey: string = nconf.get('apiKey');

const options = yargs
  .usage("Usage: $ cplug <option> <asset_key>")
  .option("init", { alias: "initialize", describe: "Messari API key", type: "string",  demandOption: !apiKey })
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
  setApiKey(options.init);
}

// Get asset profile
if (options.a) {
  plugAssetProfile(options.a);
}

// Get market data for asset
if (options.md) {
  plugMarketData(options.md);
}

// TODO: Get metrics for asset
// if (options.me) {
//   plugMetrics(options.me);
// }

// Get all time high data for asset
if (options.ath) {
  plugAllTimeHigh(options.ath);
}

// Get lending & borrowing data for asset
if (options.lend) {
  plugLending(options.lend);
}

// Get fee data for asset
if (options.chain) {
  plugBlockchain(options.chain);
}

// Get ROI data for asset
if (options.roi) {
  plugROI(options.roi);
}

// Get developer data for asset
if (options.dev) {
  plugDevelopers(options.dev);
}

// Get news for asset
if (options.news) {
  plugNews(options.news);
}

// TODO: Add yield for staking_stats, mining_stats, lending too?