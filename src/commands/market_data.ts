import httpClient from "../utils/http_client";
import { Table } from "console-table-printer";
import figures from "figures";

import { toCommaDelimitedDollarWithCentsString, toPercentageString } from "../utils/format";
import { ApiResponse } from "../@types/types";
import { CryptoCurrency } from "../@types/metrics";


const plugMarketData = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset market data
    const { data: crypto }: ApiResponse<CryptoCurrency> = await httpClient.get(`v1/assets/${assetKey}/metrics/market-data`).json();

    const md = new Table({
      title: `${crypto.name} Market Data`,
      columns: [
        { name: "name", title: "Name", alignment: "left" },
        { name: "symbol", title: "Symbol", alignment: "right" },
        { name: "price_usd", title: "Price (USD}", alignment: "right", color: "yellow" },
        { name: "volume_last_24_hours", title: "Volume (24hr)", alignment: "right" },
        { name: "percent_change_usd_last_1_hour", title: "%Δ (1hr)", alignment: "right" },
        { name: "percent_change_usd_last_24_hours", title: "%Δ (24hr)", alignment: "right" },
        { name: "high", title: "High (24hr)", color: "green" },
        { name: "low", title: "Low (24hr)", color: "red" },
      ]
    });

    md.addRow({
      name: crypto.name,
      symbol: crypto.symbol,
      price_usd: toCommaDelimitedDollarWithCentsString(crypto.market_data.price_usd),
      volume_last_24_hours: toCommaDelimitedDollarWithCentsString(crypto.market_data.volume_last_24_hours),
      percent_change_usd_last_1_hour:
        `${crypto.market_data.percent_change_usd_last_1_hour > 0 ? figures.arrowUp : figures.arrowDown} ${toPercentageString(crypto.market_data.percent_change_usd_last_1_hour)}`,
      percent_change_usd_last_24_hours:
        `${crypto.market_data.percent_change_usd_last_24_hours > 0 ? figures.arrowUp : figures.arrowDown} ${toPercentageString(crypto.market_data.percent_change_usd_last_24_hours)}`,
      high: toCommaDelimitedDollarWithCentsString(crypto.market_data.ohlcv_last_24_hour.high),
      low: toCommaDelimitedDollarWithCentsString(crypto.market_data.ohlcv_last_24_hour.low)
    });

    md.printTable();

  } catch (error) {
		console.error(error.response.body);
	}
}

export default plugMarketData;