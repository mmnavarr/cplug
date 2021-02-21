import { useHttpClient } from "../utils/http_client";
import figlet from "figlet";
import { Table } from "console-table-printer";

import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedDollarWithCentsString, toPercentageString, toUppercaseFirstLetter } from "../utils/format";
import chalk from "chalk";


const plugLending = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset metrics
    const { data: crypto } = await useHttpClient<CryptoCurrency>(`v1/assets/${assetKey}/metrics?fields=id,symbol,name,lend_rates,borrow_rates,loan_data`);

    // Display asset name
    console.log(figlet.textSync(crypto.name, { font: "Sub-Zero" }));

    // Define lend rates table and iterate through response to populate table if applicable
    if (crypto.lend_rates !== null) {
      const lendRates = new Table({
        title: "Lend Rates",
        columns: [
          { name: "platform", title: "Platform" },
          { name: "rate", title: "Rate %", alignment: "right" }
        ]
      });
      for (const [key, value] of Object.entries(crypto.lend_rates)) {
        lendRates.addRow({
          platform: toUppercaseFirstLetter(key),
          rate: toPercentageString(value)
        });
      }
      lendRates.printTable();
    } else {
      console.log(chalk.yellowBright(`No lending data available for ${crypto.name}.`));
    }

    // Define borrow rates table and iterate through response to populate table if applicable
    if (crypto.borrow_rates !== null) {
      const borrowRates = new Table({
        title: "Borrow Rates",
        columns: [
          { name: "platform", title: "Platform" },
          { name: "rate", title: "Rate %", alignment: "right" }
        ]
      });
      for (const [key, value] of Object.entries(crypto.borrow_rates)) {
        borrowRates.addRow({
          platform: toUppercaseFirstLetter(key),
          rate: toPercentageString(value)
        });
      }
      borrowRates.printTable();
    } else {
      console.log(chalk.yellowBright(`No borrow data available for ${crypto.name}.`));
    }


    // Define borrow rates table and iterate through response to populate table
    const loanData = new Table({
      title: `${crypto.name} Loan Data (USD)`,
      columns: [
        { name: "originated_last_24_hours_usd", title: "Originated 24hr",  alignment: "right" },
        { name: "outstanding_debt_usd", title: "Outstanding Debt", alignment: "right" },
        { name: "repaid_last_24_hours_usd", title: "Repaid Last 24hr", alignment: "right" },
        { name: "collateralized_last_24_hours_usd", title: "Collateralized 24hr", alignment: "right" },
        { name: "collateral_liquidated_last_24_hours_usd", title: "Collateralized Liquidated 24hr", alignment: "right" },
      ]
    });
    loanData.addRow({
      originated_last_24_hours_usd: toCommaDelimitedDollarWithCentsString(crypto.loan_data.originated_last_24_hours_usd),
      outstanding_debt_usd: toCommaDelimitedDollarWithCentsString(crypto.loan_data.outstanding_debt_usd),
      repaid_last_24_hours_usd: toCommaDelimitedDollarWithCentsString(crypto.loan_data.repaid_last_24_hours_usd),
      collateralized_last_24_hours_usd: toCommaDelimitedDollarWithCentsString(crypto.loan_data.collateralized_last_24_hours_usd),
      collateral_liquidated_last_24_hours_usd: toCommaDelimitedDollarWithCentsString(crypto.loan_data.collateral_liquidated_last_24_hours_usd),
    });
    loanData.printTable();

  } catch (error) {
		console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugLending;