import httpClient from "../utils/http_client";
import figures from "figures";
import { Table } from "console-table-printer";

import { ApiResponse } from "../@types/types";
import { CryptoCurrency } from "../@types/metrics";
import { toCommaDelimitedString } from "../utils/format";


const plugDevelopers = async (assetKey: string): Promise<void> => {
  try {
    // Map API call to get asset metrics
    const { data: crypto }: ApiResponse<CryptoCurrency> = await httpClient.get(`v1/assets/${assetKey}/metrics?fields=id,symbol,name,developer_activity`).json();

    const developerTable = new Table({
      title: `${crypto.name} GitHub Statistics`,
      columns: [
        { name: "stars", title: `Stars ${figures.star}`, alignment: "right" },
        { name: "watchers", title: "Watchers", alignment: "right" },
        { name: "commits_last_3_months", title: "Commits (3mo)", alignment: "right" },
        { name: "commits_last_1_year", title: "Commits (1yr)", alignment: "right" },
        { name: "lines_added_last_3_months", title: "Lines Added (3mo)", alignment: "right" },
        { name: "lines_added_last_1_year", title: "Lines Added (1)", alignment: "right" },
        { name: "lines_deleted_last_3_months", title: "Lines Deleted (3mo)", alignment: "right" },
        { name: "lines_deleted_last_1_year", title: "Lines Deleted (1yr)", alignment: "right" },
      ]
    });
    developerTable.addRows([
      {
        stars: toCommaDelimitedString(crypto.developer_activity.stars),
        watchers: toCommaDelimitedString(crypto.developer_activity.watchers),
        commits_last_3_months: toCommaDelimitedString(crypto.developer_activity.commits_last_3_months),
        commits_last_1_year: toCommaDelimitedString(crypto.developer_activity.commits_last_1_year),
        lines_added_last_3_months: toCommaDelimitedString(crypto.developer_activity.lines_added_last_3_months),
        lines_added_last_1_year: toCommaDelimitedString(crypto.developer_activity.lines_added_last_1_year),
        lines_deleted_last_3_months: toCommaDelimitedString(crypto.developer_activity.lines_deleted_last_3_months),
        lines_deleted_last_1_year: toCommaDelimitedString(crypto.developer_activity.lines_deleted_last_1_year),
      }
    ]);
    developerTable.printTable();

  } catch (error) {
		console.error(error.response.body);
	}
}

export default plugDevelopers;