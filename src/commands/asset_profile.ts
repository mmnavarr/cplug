import { useHttpClient } from "../utils/http_client";
import figlet from "figlet";
import chalk from "chalk";
import { Table } from "console-table-printer";
import cliHtml from "cli-html";

// Types
import { CryptoCurrency } from "../@types/asset_profile";


const plugAssetProfile = async (assetKey: string): Promise<void> => {
  try {

    // Map API call to get asset profile
    const { data: crypto } = await useHttpClient<CryptoCurrency>(`v2/assets/${assetKey}/profile`, "Loading Asset Profile...");

    // Bitcoin general information
    console.log(figlet.textSync(crypto.name, { font: "Ghost" }));
    console.log(cliHtml(`
      <button>${crypto.profile.general.overview.sector}</button>
      <button>${crypto.profile.general.overview.category}</button>
      <blockquote>${crypto.profile.general.overview.tagline}</blockquote>
    `));
    console.log(cliHtml(crypto.profile.general.overview.project_details));

    const officialLinks = new Table({
      title: `Official ${crypto.symbol} Links`,
      columns: [
        { name: "name", title: "Name" },
        { name: "link", title: "Link" }
      ]
    });
    officialLinks.addRows(crypto.profile.general.overview.official_links);
    officialLinks.printTable();

    // console.log(chalk.bold`Roadmap`);
    // console.log(prettyjson.render(crypto.profile.general.roadmap));

    // Contributors
    const existsIndividualContributors = crypto.profile.contributors.individuals.length > 0;
    const existsOrganizationContributors = crypto.profile.contributors.organizations.length > 0;
    const showContributors = existsIndividualContributors && existsOrganizationContributors;
    if (showContributors) {
      console.log(chalk.bold`Contributors`);
      if (existsIndividualContributors) {
        const ic = crypto.profile.contributors.individuals.map((ind) => `${ind.first_name} ${ind.last_name}`).join(", ");
        console.log(`Individuals - ${ic}`);
      }
      if (existsOrganizationContributors) {
        const oc = crypto.profile.contributors.organizations.map((org) => org.name).join(", ");
        console.log(`Organizations - ${oc}`);
      }
    }

    // Investors
    const existsIndividualInvestors = crypto.profile.investors.individuals.length > 0;
    const existsOrganizationInvestors = crypto.profile.investors.organizations.length > 0;
    const showInvestors = existsIndividualInvestors && existsOrganizationInvestors;
    if (showInvestors) {
      console.log(chalk.bold`Investors`);
      if (existsIndividualInvestors) {
        const ii = crypto.profile.investors.individuals.map((ind) => `${ind.first_name} ${ind.last_name}`).join(", ")
        console.log(`Individuals - ${ii}`);
      }
      if (existsOrganizationInvestors) {
        const oi = crypto.profile.investors.organizations.map((org) => org.name).join(", ");
        console.log(`Organizations - ${oi}`);
      }
    }

    // Advisors
    const existsIndividualAdvisors = crypto.profile.advisors.individuals.length > 0;
    const existsOrganizationAdvisors = crypto.profile.advisors.organizations.length > 0;
    const showAdvisors = existsIndividualAdvisors && existsOrganizationAdvisors;
    if (showAdvisors) {
      console.log(chalk.bold`Advisors`);
      if (existsIndividualAdvisors) {
        const ia = crypto.profile.advisors.individuals.map((ind) => `${ind.first_name} ${ind.last_name}`).join(", ") ;
        console.log(`Individuals - ${ia}`);
      }
      if (existsOrganizationAdvisors) {
        const oa = crypto.profile.advisors.organizations.map((org) => org.name).join(", ");
        console.log(`Organizations - ${oa}`);
      }
    }

    // Assets
    const existsAssets = crypto.profile.ecosystem.assets.length > 0;
    if (existsAssets) {
      console.log(chalk.bold`Assets`);
      console.log(crypto.profile.ecosystem.assets.map((a) => a.name).join(", "));
    }

    // Organizations
    const existsOrganizations = crypto.profile.ecosystem.organizations.length > 0;
    if (existsOrganizations) {
      console.log(chalk.bold`Organizations`);
      console.log(crypto.profile.ecosystem.organizations.map((org) => org.name).join(", "));
    }

  } catch (error) {
		console.log("Please try again.");
    // console.error(error.response.body);
	}
}

export default plugAssetProfile;