import { makeHttpCall } from "../utils/http_client";
import { Table } from "console-table-printer";

import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedDollarWithCentsString, toCommaDelimitedString } from "../utils/format";


const plugBlockchain = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset metrics
    const { data: crypto } = await makeHttpCall<CryptoCurrency>(`v1/assets/${assetKey}/metrics?fields=id,symbol,name,blockchain_stats_24_hours,on_chain_data`);

    const bc24HourStats = new Table({
      title: `${crypto.name} Blockchain Data (USD - 24hr)`,
      columns: [
        { name: "count_of_active_addresses", title: "Active Addresses", alignment: "right" }, // 629683
        { name: "transaction_volume", title: "Tx Volume", alignment: "right" }, // 13193480582.455883
        { name: "adjusted_transaction_volume", title: "Adj. Tx Volume", alignment: "right" }, // 9052216096.553448
        { name: "adjusted_nvt", title: "Adj. NVT", alignment: "right" }, // 24.857006519211
        { name: "median_tx_value", title: "Median Tx Value", alignment: "right" }, // 322.7089311996182
        { name: "median_tx_fee", title: "Media Tx Fee", alignment: "right" }, // 11.79850264187507
        { name: "count_of_tx", title: "# of Tx", alignment: "right" }, // 1323618
        { name: "new_issuance", title: "New Issuance", alignment: "right" }, // 26856350.218049396
        { name: "count_of_blocks_added", title: "Blocks", alignment: "right" }, // 6577
      ]
    });

    bc24HourStats.addRow({
      count_of_active_addresses: toCommaDelimitedString(crypto.blockchain_stats_24_hours.count_of_active_addresses),
      transaction_volume: toCommaDelimitedDollarWithCentsString(crypto.blockchain_stats_24_hours.transaction_volume),
      adjusted_transaction_volume: toCommaDelimitedDollarWithCentsString(crypto.blockchain_stats_24_hours.adjusted_transaction_volume),
      adjusted_nvt: toCommaDelimitedDollarWithCentsString(crypto.blockchain_stats_24_hours.adjusted_nvt),
      median_tx_value: toCommaDelimitedDollarWithCentsString(crypto.blockchain_stats_24_hours.median_tx_value),
      median_tx_fee: toCommaDelimitedDollarWithCentsString(crypto.blockchain_stats_24_hours.median_tx_fee),
      count_of_tx: toCommaDelimitedString(crypto.blockchain_stats_24_hours.count_of_tx),
      new_issuance: toCommaDelimitedString(crypto.blockchain_stats_24_hours.new_issuance),
      count_of_blocks_added: toCommaDelimitedString(crypto.blockchain_stats_24_hours.count_of_blocks_added),
    });

    bc24HourStats.printTable();


  } catch (error) {
		console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugBlockchain;