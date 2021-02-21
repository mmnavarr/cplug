import { useHttpClient } from "../utils/http_client";
import { Table } from "console-table-printer";

import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedString } from "../utils/format";


const plugROI = async (assetKey: string) => {
  try {
    // Map API call to get asset market data
    const { data: crypto } = await useHttpClient<CryptoCurrency>(`v1/assets/${assetKey}/metrics?fields=id,symbol,name,roi_data,roi_by_year`);

    const usdROI = new Table({
      title: `${crypto.name} RIO Data (USD)`,
      columns: [
        { name: "percent_change_last_1_week", title: "%Δ (1w)", alignment: "right" }, // 5.144891736855635,
        { name: "percent_change_last_1_month", title: "%Δ (1m)", alignment: "right" }, // 71.92001947469353,
        { name: "percent_change_last_3_months", title: "%Δ (3m)", alignment: "right" }, // 241.17753033810953,
        { name: "percent_change_last_1_year", title: "%Δ (1y)", alignment: "right" }, // 619.4002125888153,
        { name: "percent_change_month_to_date", title: "%Δ MTD", alignment: "right" }, // 38.92860975708642,
        { name: "percent_change_quarter_to_date", title: "%Δ QTD", alignment: "right" }, // 161.48588385069164,
        { name: "percent_change_year_to_date", title: "%Δ YTD", alignment: "right" }, // 161.48588385069164
      ]
    });
    usdROI.addRow({
      percent_change_last_1_week: toCommaDelimitedString(crypto.roi_data.percent_change_last_1_week),
      percent_change_last_1_month: toCommaDelimitedString(crypto.roi_data.percent_change_last_1_month),
      percent_change_last_3_months: toCommaDelimitedString(crypto.roi_data.percent_change_last_3_months),
      percent_change_last_1_year: toCommaDelimitedString(crypto.roi_data.percent_change_last_1_year),
      percent_change_month_to_date: toCommaDelimitedString(crypto.roi_data.percent_change_month_to_date),
      percent_change_quarter_to_date: toCommaDelimitedString(crypto.roi_data.percent_change_quarter_to_date),
      percent_change_year_to_date: toCommaDelimitedString(crypto.roi_data.percent_change_year_to_date),
    });
    usdROI.printTable();

    // Crypto (BTC & ETH) ROI Table
    const cryptoROI = new Table({
      title: `${crypto.name} RIO Data (BTC & ETH)`,
      columns: [
        { name: "percent_change_btc_last_1_week", title: "BTC %Δ (1w)", alignment: "right" }, // -10.665361245410224,
        { name: "percent_change_btc_last_1_month", title: "BTC %Δ (1m)", alignment: "right" }, // -4.522322747508367,
        { name: "percent_change_btc_last_3_months", title: "BTC %Δ (3m)", alignment: "right" }, // 13.071601021823872,
        { name: "percent_change_btc_last_1_year", title: "BTC %Δ (1y)", alignment: "right" }, // 25.47792781690931,
        { name: "percent_change_eth_last_1_week", title: "ETH %Δ (1w)", alignment: "right" }, // 0,
        { name: "percent_change_eth_last_1_month", title: "ETH %Δ (1m)", alignment: "right" }, // 0,
        { name: "percent_change_eth_last_3_months", title: "ETH %Δ (3m)", alignment: "right" }, // 0,
        { name: "percent_change_eth_last_1_year", title: "ETH %Δ (1y)", alignment: "right" }, // 0,
      ]
    });
    cryptoROI.addRow({
      percent_change_btc_last_1_week: toCommaDelimitedString(crypto.roi_data.percent_change_btc_last_1_week),
      percent_change_btc_last_1_month: toCommaDelimitedString(crypto.roi_data.percent_change_btc_last_1_month),
      percent_change_btc_last_3_months: toCommaDelimitedString(crypto.roi_data.percent_change_btc_last_3_months),
      percent_change_btc_last_1_year: toCommaDelimitedString(crypto.roi_data.percent_change_btc_last_1_year),
      percent_change_eth_last_1_week: toCommaDelimitedString(crypto.roi_data.percent_change_eth_last_1_week),
      percent_change_eth_last_1_month: toCommaDelimitedString(crypto.roi_data.percent_change_eth_last_1_month),
      percent_change_eth_last_3_months: toCommaDelimitedString(crypto.roi_data.percent_change_eth_last_3_months),
      percent_change_eth_last_1_year: toCommaDelimitedString(crypto.roi_data.percent_change_eth_last_1_year),
    });
    cryptoROI.printTable();

    // Past years ROI table
    const yearlyROI = new Table({
      title: `${crypto.name} RIO By Year (USD)`,
      columns: [
        { name: "2020_usd_percent", title: "2020 %Δ", alignment: "right" }, // -10.665361245410224,
        { name: "2019_usd_percent", title: "2019 %Δ", alignment: "right" }, // -4.522322747508367,
        { name: "2018_usd_percent", title: "2018 %Δ", alignment: "right" }, // 13.071601021823872,
        { name: "2017_usd_percent", title: "2017 %Δ", alignment: "right" }, // 25.47792781690931,
        { name: "2016_usd_percent", title: "2016 %Δ", alignment: "right" }, // 0,
        { name: "2015_usd_percent", title: "2015 %Δ", alignment: "right" }, // 0,
        { name: "2014_usd_percent", title: "2014 %Δ", alignment: "right" }, // 0,
        { name: "2013_usd_percent", title: "2013 %Δ", alignment: "right" }, // 0,
        { name: "2012_usd_percent", title: "2012 %Δ", alignment: "right" }, // 0,
        { name: "2011_usd_percent", title: "2011 %Δ", alignment: "right" }, // 0,
      ]
    });
    yearlyROI.addRow({
      '2020_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2020_usd_percent"]),
      '2019_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2019_usd_percent"]),
      '2018_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2018_usd_percent"]),
      '2017_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2017_usd_percent"]),
      '2016_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2016_usd_percent"]),
      '2015_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2015_usd_percent"]),
      '2014_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2014_usd_percent"]),
      '2013_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2013_usd_percent"]),
      '2012_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2012_usd_percent"]),
      '2011_usd_percent': toCommaDelimitedString(crypto.roi_by_year["2011_usd_percent"]),
    });
    yearlyROI.printTable();

  } catch (error) {
    console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugROI;