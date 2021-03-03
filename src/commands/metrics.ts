import { makeHttpCall } from "../utils/http_client";
import { printTable } from "console-table-printer";

import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedDollarWithCentsString, toPercentageString } from "../utils/format";


const plugMetrics = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset market data
    const { data: crypto } = await makeHttpCall<CryptoCurrency>(`v1/assets/${assetKey}/metrics`);
    // console.log("🚀 ~ file: metrics.ts ~ line 12 ~ plugMetrics ~ crypto", crypto)

    // Format crypto data display for table
    const cryptoEntry = {
      "Name": crypto.name,
      "Symbol": crypto.symbol,
      "Price (USD)": toCommaDelimitedDollarWithCentsString(crypto.market_data.price_usd),
      "Volume (24hr)": toCommaDelimitedDollarWithCentsString(crypto.market_data.volume_last_24_hours),
      "% Change (1hr)": toPercentageString(crypto.market_data.percent_change_usd_last_1_hour),
      "% Change (24hr)": toPercentageString(crypto.market_data.percent_change_usd_last_24_hours),
      "High (24hr)": toCommaDelimitedDollarWithCentsString(crypto.market_data.ohlcv_last_24_hour.high),
      "Low (24hr)": toCommaDelimitedDollarWithCentsString(crypto.market_data.ohlcv_last_24_hour.low)
    };

    printTable([cryptoEntry]);

  } catch (error) {
		console.error(error.response.body);
	}
}

export default plugMetrics;