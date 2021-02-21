import nconf from "nconf";
import fs from "fs";
import got, { Got } from "got";


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

export default httpClient;