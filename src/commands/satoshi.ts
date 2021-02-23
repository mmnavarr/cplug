import { useHttpClient } from "../utils/http_client";

import { toCommaDelimitedDollarWithCentsString, toDecimalLetterString } from "../utils/format";
import { CryptoCurrency } from "../@types/metrics";
import figlet from "figlet";
import chalk from "chalk";

// Est. BTC holdings by Satoshi according to https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/ (11M)
const SATOSHI_BTC_HOLDINGS = 1100000;

const plugSatoshi = async () => {
  try {
    // Map API call to get btc market data
    const { data: crypto } = await useHttpClient<CryptoCurrency>(`v1/assets/btc/metrics/market-data`);

    console.log(figlet.textSync("Satoshi", { font: "Sub-Zero" }));

    const btcUsdPrice = chalk.yellow(toCommaDelimitedDollarWithCentsString(crypto.market_data.price_usd));
    const satoshiNetWorth = chalk.green(toCommaDelimitedDollarWithCentsString(crypto.market_data.price_usd * SATOSHI_BTC_HOLDINGS));
    const satoshiNetWorthShort = chalk.green(toDecimalLetterString(crypto.market_data.price_usd * SATOSHI_BTC_HOLDINGS));

    console.log(`At the current BTC price of ${btcUsdPrice}, Satoshi's net worth is ${satoshiNetWorth} (${satoshiNetWorthShort})!\n`);
    console.log("Satoshi Nakamoto mined 22,000 blocks singlehandedly, netting a total of 1.1 million BTC in block rewards.\n");

  } catch (error) {
		console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugSatoshi;