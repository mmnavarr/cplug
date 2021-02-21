import nconf from "nconf";
import fs from "fs";

// // Set nconfig env variables in config file
// export const initializeNconf = () => {
//   nconf.argv().env().file({ file: "./config.json" });

//   nconf.defaults({
//     "apiKey": null
//   });

//   nconf.save((error: Error) => {
//     fs.readFile('./config.json', (_, data) => void console.dir(JSON.parse(data.toString())));

//     if (error) console.error(error);
//   }); 
// }

// export const setApiConfiguration = (apiKey: string) => {
//   nconf.argv().env().file({ file: "./config.json" });

//   // Store API key locally for subsequent commands/api calls
//   nconf.set("apiKey", apiKey);

//   nconf.save((error: Error) => {
//     fs.readFile('./config.json', (_, data) => void console.dir(JSON.parse(data.toString())));

//     if (error) console.error(error);
//   });
// }

// export const apiKey: string = nconf.get('apiKey');