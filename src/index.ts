#!/usr/bin/env node
import nconf from "nconf";
import { Command } from "commander";

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

const apiKey: string = nconf.get("apiKey");

// New command instance to capture and parse cli
const program = new Command();

program
  .description("Cryptocurrency market data at your fingertips.")
  .option("-a --asset <ticker>", "Get asset profile")
  .option("-md --market_data <ticker>", "Get asset market data")
  // .option("me --metrics <ticker>", "Asset Key")
  .option("-ath --alltimehigh <ticker>", "Get all time high data")
  .option("-lend --lending <ticker>", "Get lender/borrower rates and general defi data")
  .option("-chain --blockchain <ticker>", "Get information about the blockchain")
  .option("-roi --roi <ticker>", "Get ROI numbers")
  .option("-dev --developers <ticker>", "Get GitHub repository data")
  .option("-news --news <ticker>", "Get current Messari news for asset")
  .helpOption("-h, --help", "Display help for more commands");

// If API Key is not set, make user initialize
if (!apiKey) {
  program.requiredOption("-i, --init <ticker>", "Enter Messari API Key")
}

// Parse & get cli command options
program.parse();
const options = program.opts();

// Set API key in http client header and set is init flag to true
if (options.init) {
  setApiKey(options.init);
}

// Get asset profile
if (options.asset) {
  plugAssetProfile(options.asset);
}

// Get market data for asset
if (options.market_data) {
  plugMarketData(options.market_data);
}

// TODO: Get metrics for asset
// if (options.me) {
//   plugMetrics(options.me);
// }

// Get all time high data for asset
if (options.alltimehigh) {
  plugAllTimeHigh(options.alltimehigh);
}

// Get lending & borrowing data for asset
if (options.lending) {
  plugLending(options.lending);
}

// Get fee data for asset
if (options.blockchain) {
  plugBlockchain(options.blockchain);
}

// Get ROI data for asset
if (options.roi) {
  plugROI(options.roi);
}

// Get developer data for asset
if (options.developers) {
  plugDevelopers(options.developers);
}

// Get news for asset
if (options.news) {
  plugNews(options.news);
}

// TODO: Add yield for staking_stats, mining_stats, lending too?