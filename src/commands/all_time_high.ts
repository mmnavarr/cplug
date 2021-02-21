import httpClient from "../utils/http_client";
import { Table } from "console-table-printer";

import { ApiResponse } from "../@types/types";
import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedDollarWithCentsString, toPercentageString, toSatoshiPrecisionString } from "../utils/format";


const plugAllTimeHigh = async (assetKey: string) => {
  try {
    // Map API call to get asset metrics
    const { data: crypto }: ApiResponse<CryptoCurrency> = await httpClient.get(`v1/assets/${assetKey}/metrics?fields=id,symbol,name,market_data,all_time_high`).json();

    const athTable = new Table({
      columns: [
        { name: "name", title: "Name", alignment: "left" },
        { name: "price_usd", title: "Price (USD)", alignment: "right" },
        { name: "price_btc", title: `Price (BTC/${crypto.symbol}`, alignment: "right" },
        { name: "price_eth", title: `Price (ETH/${crypto.symbol}`, alignment: "right" },
        { name: "all_time_high_usd", title: "ATH Price (USD)", alignment: "right", color: "yellow" },
        { name: "all_time_high_percent_delta", title: "ATH %Δ", alignment: "right" },
        { name: "all_time_high_days_since", title: "ATH Days Since", alignment: "right" },
        { name: "all_time_high_date", title: "ATH Date" },
      ]
    });
    athTable.addRows([
      {
        name: crypto.name,
        price_usd: toCommaDelimitedDollarWithCentsString(crypto.market_data.price_usd),
        price_btc: toSatoshiPrecisionString(crypto.market_data.price_btc),
        price_eth: toSatoshiPrecisionString(crypto.market_data.price_eth),
        all_time_high_usd: toCommaDelimitedDollarWithCentsString(crypto.all_time_high.price),
        all_time_high_percent_delta: toPercentageString(crypto.all_time_high.percent_down),
        all_time_high_days_since: crypto.all_time_high.days_since, // Not formatting on purpose because theres no need for a comma :)
        all_time_high_date: crypto.all_time_high.at.toLocaleString()
      }
    ]);
    athTable.printTable();

  } catch (error) {
		console.error(error.response.body);
	}
}

export default plugAllTimeHigh;