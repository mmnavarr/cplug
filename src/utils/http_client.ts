import nconf from "nconf";
import fs from "fs";
import got, { Got } from "got";

import ora from "ora";
import { ApiResponse } from "../@types/types";
import chalk from "chalk";

const httpClient: Got = got.extend({
	prefixUrl: "https://data.messari.io/api"
});

// Setter fn to set api key in http client header
export const setApiKey = (apiKey: string): void => {
  httpClient.extend({
    headers: {
      "x-messari-api-key": apiKey
    }
  });
  console.log("API Key set in header");

  nconf.argv().env().file({ file: "./config.json" });

  // Store API key locally for subsequent commands/api calls
  nconf.set("apiKey", apiKey);

  nconf.save((error: Error) => {
    fs.readFile('./config.json', (_, data) => void console.dir(JSON.parse(data.toString())));

    if (error) console.error(error);
  });
}

interface UseHttpClientResponse<T> {
  data: T;
}

export const useHttpClient = async <T>(url: string, loaderString: string = "Loading..."): Promise<UseHttpClientResponse<T>> => {
  // Create spinner for API loading state
  const spinner = ora(loaderString)
  try {
    spinner .start();

    // Call API request
    const { data }: ApiResponse<T> = await httpClient.get(url).json();

    spinner.stop();

    return { data };
  } catch (error) {
    spinner.stop();

		console.error(chalk.red("Error fetching your data."));

    throw Error("Error fetching your data.");
	} finally {
    spinner.stop();
  }
}

export default httpClient;