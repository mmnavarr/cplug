import httpClient from "../utils/http_client";
import figlet from "figlet";
import chalk from "chalk";
import { Table } from "console-table-printer";
import cliHtml from "cli-html";

// Types
import { ApiResponse } from "../@types/types";
import { CryptoCurrency } from "../@types/asset_profile";


const plugAssetProfile = async (assetKey: string) => {
  try {
    // Map API call to get asset profile
    const { data: crypto }: ApiResponse<CryptoCurrency> = await httpClient.get(`v2/assets/${assetKey}/profile`).json();

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
		console.error(error.response.body);
	}
}

export default plugAssetProfile;

// const x = {
//   "profile": {
//     "general": {
//       "overview": {
//         "is_verified": false,
//         "tagline": "A decentralized computing platform",
//         "category": "Infrastructure",
//         "sector": "Smart Contracts Platforms",
//         "tags": "Privacy",
//         "project_details": "Ethereum is a distributed blockchain computing platform for smart contracts and decentralized applications.",
//         "official_links": [
//           {
//             "name": "Example",
//             "link": "example.com"
//           }
//         ]
//       },
//       "background": {
//         "background_details": "Ethereum is a blockchain designed to be a distributed computing platform for executing smart contracts and building decentralized applications (dapps). The Ethereum white paper was published in late 2013, and the project was formally announced at a Bitcoin conference in early 2014. Vitalik Butern, co-creator of Ethereum, started designing the protocol due to some limitations in Bitcoin’s protocol (i.e., Turing completeness) . Ethereum officially launched in mid-2015 with the informally stated goal of supporting “unstoppable applications.”The current Ethereum blockchain (ETH) split off of the original Ethereum Classic blockchain (ETC) in a hard fork on July 20, 2016 at block height 920000. The Ethereum fork was initiated after a bug in Ethereum’s Decentralized Autonomous Organization (DAO) smart contract that was exploited to siphon off 3,600,000 ethers.The Ethereum Foundation, created in 2014, is an Ethereum-focused non-profit organization dedicated to Ethereum’s research, core protocol development, and ecosystem growth. The Ethereum Foundation oversaw the original ether crowdsale in July 2014. ",
//         "issuing_organizations": [
//           {
//             "slug": "ethereum-foundation",
//             "name": "Ethereum Foundation",
//             "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//             "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//           }
//         ]
//       },
//       "roadmap": [
//         {
//           "title": "Serenity Phase 0",
//           "date": "2020-01-03T00:00:00.000Z",
//           "type": "Protocol Upgrade",
//           "details": "Phase 0 of the transition to PoS Casper"
//         }
//       ],
//       "regulation": {
//         "regulatory_details": "The Securities and Exchange Commission announced in September 2019 that it settled charges against blockchain technology company Block.one for conducting an unregistered initial coin offering of digital tokens (ICO) that raised the equivalent of several billion dollars over approximately one year.  The company agreed to settle the charges by paying a $24 million civil penalty.",
//         "sfar_score": 4,
//         "sfar_summary": "1. Current functionality of the platform; 2. Absence of investment-like language or marketing; 3. Decentralized development and usage"
//       }
//     },
//     "contributors": {
//       "individuals": [
//         {
//           "slug": "anthony-di-iorio",
//           "first_name": "Vitalik",
//           "last_name": "Buterin",
//           "title": "Co-Founder of Ethereum",
//           "description": "Vitalik is the creator of Ethereum. He first discovered blockchain and cryptocurrency technologies through Bitcoin in 2011, and was immediately excited by the technology and its potential. He cofounded Bitcoin Magazine in September 2011, and after two and a half years looking at what the existing blockchain technology and applications had to offer, wrote the Ethereum white paper in November 2013. He now leads Ethereum's research team, working on future versions of the Ethereum protocol.",
//           "avatar_url": "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg"
//         }
//       ],
//       "organizations": [
//         {
//           "slug": "ethereum-foundation",
//           "name": "Ethereum Foundation",
//           "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//           "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//         }
//       ]
//     },
//     "advisors": {
//       "individuals": [
//         {
//           "slug": "anthony-di-iorio",
//           "first_name": "Vitalik",
//           "last_name": "Buterin",
//           "title": "Co-Founder of Ethereum",
//           "description": "Vitalik is the creator of Ethereum. He first discovered blockchain and cryptocurrency technologies through Bitcoin in 2011, and was immediately excited by the technology and its potential. He cofounded Bitcoin Magazine in September 2011, and after two and a half years looking at what the existing blockchain technology and applications had to offer, wrote the Ethereum white paper in November 2013. He now leads Ethereum's research team, working on future versions of the Ethereum protocol.",
//           "avatar_url": "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg"
//         }
//       ],
//       "organizations": [
//         {
//           "slug": "ethereum-foundation",
//           "name": "Ethereum Foundation",
//           "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//           "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//         }
//       ]
//     },
//     "investors": {
//       "individuals": [
//         {
//           "slug": "anthony-di-iorio",
//           "first_name": "Vitalik",
//           "last_name": "Buterin",
//           "title": "Co-Founder of Ethereum",
//           "description": "Vitalik is the creator of Ethereum. He first discovered blockchain and cryptocurrency technologies through Bitcoin in 2011, and was immediately excited by the technology and its potential. He cofounded Bitcoin Magazine in September 2011, and after two and a half years looking at what the existing blockchain technology and applications had to offer, wrote the Ethereum white paper in November 2013. He now leads Ethereum's research team, working on future versions of the Ethereum protocol.",
//           "avatar_url": "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg"
//         }
//       ],
//       "organizations": [
//         {
//           "slug": "ethereum-foundation",
//           "name": "Ethereum Foundation",
//           "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//           "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//         }
//       ]
//     },
//     "ecosystem": {
//       "assets": [
//         {
//           "id": "6104fc11-c09f-467b-bb70-f5017483f864",
//           "name": "Loom Network"
//         }
//       ],
//       "organizations": [
//         {
//           "slug": "ethereum-foundation",
//           "name": "Ethereum Foundation",
//           "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//           "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//         }
//       ]
//     },
//     "economics": {
//       "token": {
//         "token_name": "DAI",
//         "token_type": "ERC-20",
//         "block_explorers": [
//           {
//             "name": "Example",
//             "link": "example.com"
//           }
//         ],
//         "multitoken": [
//           {
//             "id": "6104fc11-c09f-467b-bb70-f5017483f864",
//             "name": "Loom Network"
//           }
//         ],
//         "token_usage": "Payments",
//         "token_usage_details_and_wallets": "Ethereum network peers pay fees priced in gas to include transactions in blocks. Gas is priced in ethers, but Ethereum makes the distinction between ethers and gas to separate the exchange rate of the native currency and the network's computational cost. Gas fees increase and decrease as demand for block space increases and decreases."
//       },
//       "launch": {
//         "general": {
//           "launch_style": "Fair Launch",
//           "launch_details": "Ethereum’s original token distribution event, managed by the Ethereum Foundation, sold roughly 60 million ethers (80% of the initial 72 million ether supply) to the public. The 2015 crowdsale initially priced 2000 ethers at 1 bitcoin. The remaining 12 million (20% of the initial supply) were allocated to the Foundation and early Ethereum contributors. Of the ethers sent to the Foundation, 3 million were allocated to a long-term endowment, 6 million were distributed among 85 developers who contributed prior to the crowdsale, and 3 million were designed as a “developer purchase program” that gave Ethereum developers the rights to purchase ethers at crowdsale prices."
//         },
//         "fundraising": {
//           "sales_rounds": [
//             {
//               "title": "Crowdsale",
//               "start_date": "2016-07-22T00:00:00.000Z",
//               "type": "Public Sale",
//               "details": "The crowdsale was completed in less than 6 hours with over 12,000 participants.",
//               "end_date": "2016-07-23T00:00:00.000Z",
//               "native_tokens_allocated": 5000000,
//               "asset_collected": "ETH",
//               "price_per_token_in_asset": 0.0005,
//               "equivalent_price_per_token_in_USD": 1.05,
//               "amount_collected_in_asset": 2500,
//               "amount_collected_in_USD": 5250000,
//               "is_kyc_required": true,
//               "restricted_jurisdictions": [
//                 "France"
//               ]
//             }
//           ],
//           "sales_documents": [
//             {
//               "name": "Example",
//               "link": "example.com"
//             }
//           ],
//           "sales_treasury_accounts": [
//             {
//               "account_type": "Crowdsale Wallet",
//               "asset_held": {
//                 "id": "6104fc11-c09f-467b-bb70-f5017483f864",
//                 "name": "Loom Network"
//               },
//               "addresses": [
//                 {}
//               ],
//               "security": "Multisig wallet"
//             }
//           ],
//           "treasury_policies": [
//             {
//               "name": "Example",
//               "link": "example.com"
//             }
//           ],
//           "projected_use_of_sales_proceeds": [
//             {
//               "category": "Marketing",
//               "amount_in_percentage": 75.8
//             }
//           ]
//         },
//         "initial_distribution": {
//           "initial_supply": 72000000.53,
//           "initial_supply_repartition": {
//             "allocated_to_investors_percentage": 83.47,
//             "allocated_to_organization_or_founders_percentage": 16.53,
//             "allocated_to_premined_rewards_or_airdrops_percentage": 0
//           },
//           "token_distribution_date": "2015-07-30T00:00:00.000Z",
//           "genesis_block_date": "2015-07-30T00:00:00.000Z"
//         }
//       },
//       "consensus_and_emission": {
//         "supply": {
//           "supply_curve_details": "New ethers are generated via block rewards, initially set a 5 ethers per block. Constantinople and St. Petersburg, two later forks, reduce block rewards from 3 to 2 ethers.",
//           "general_emission_type": "Deflationary",
//           "precise_emission_type": "Decreasing Inflation rate",
//           "is_capped_supply": false,
//           "max_supply": 21000000
//         },
//         "consensus": {
//           "consensus_details": "The consensus model in Tezos is defined as Liquid Proof of Stake (LPoS). LPoS enables stakeholders even with the smallest sum of holdings to participate in the baking & governance process, by delegating the coins to a Delegation Service of their choice.",
//           "general_consensus_mechanism": "Proof-of-Stake",
//           "precise_consensus_mechanism": "Liquid Proof-of-Stake",
//           "targeted_block_time": 15,
//           "block_reward": 2,
//           "mining_algorithm": "Cuckoo Cycle",
//           "next_halving_date": "2020-03-01T00:00:00.000Z",
//           "is_victim_of_51_percent_attack": true
//         }
//       },
//       "native_treasury": {
//         "accounts": [
//           {
//             "account_type": "Crowdsale Wallet",
//             "addresses": [
//               {
//                 "name": "Example",
//                 "link": "example.com"
//               }
//             ]
//           }
//         ],
//         "treasury_usage_details": "The native treasury will be used to distribute rewards to developers on the platform."
//       }
//     },
//     "technology": {
//       "overview": {
//         "technology_details": "The Ethereum Virtual Machine (EVM) is an environment for executing smart contracts on the platform. Ethers are the native currency of the Ethereum blockchain. The EVM is a core component of Ethereum that allows developing smart contract-powered applications within the distributed network’s consensus.",
//         "client_repositories": [
//           {
//             "name": "Example",
//             "link": "example.com",
//             "license_type": "MIT"
//           }
//         ]
//       },
//       "security": {
//         "audits": [
//           {
//             "title": "Token Sale Contract Audit",
//             "date": "2019-03-01T00:00:00.000Z",
//             "type": "Smart Contracts",
//             "details": "The token sales smart contracts were audited prior to the sale."
//           }
//         ],
//         "known_exploits_and_vulnerabilities": [
//           {
//             "title": "Counterfeit vulnerability",
//             "date": "2017-10-25T00:00:00.000Z",
//             "type": "Vulnerability",
//             "details": "A counterfeiting vulnerability was discovered by a cryptographer. It was not reported publicly at the time in order to protect against it being exploited prior to its remediation, and to provide information and remediated code to other projects that were also vulnerable"
//           }
//         ]
//       }
//     },
//     "governance": {
//       "governance_details": "There is no mechanism in Ethereum to upgrade or otherwise change the protocol without a hard fork. Every time a proposal makes it through the EIP process, becomes finalized, and gets implemented in the various clients, it must subsequently be scheduled for inclusion in an upcoming hard fork. The Ethereum core developers have historically scheduled periodic hard forks to include various protocol upgrades and improvements (Byzantine Hard Fork, Constantinople hard fork).",
//       "onchain_governance": {
//         "onchain_governance_type": "Delegative on-chain vote",
//         "onchain_governance_details": "Miners have the ability to modify the per-block gas limit in either direction by a factor of 1/1024 per block produced. In December 2017, following a sudden increase in network utilization, miners coordinated to move the gas limit from 6.7M gas per block to 8M gas per block without a hard fork and without intervention on the part of the core developer, All Core Devs, or any of the other governance mechanisms.",
//         "is_treasury_decentralized": false
//       },
//       "grants": [
//         {
//           "funding_organizations": [
//             {
//               "slug": "ethereum-foundation",
//               "name": "Ethereum Foundation",
//               "logo": "https://messari.s3.amazonaws.com/images/agora-images/DOnqq1OM_400x400.jpg",
//               "description": "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference."
//             }
//           ],
//           "grant_program_details": "The Ethereum Foundation invites applications for funding for building a useful product or experience. It provides Ethereum teams with more runway, advice and resources to focus simply on building useful products and experiences. Grantees receive Non-dilutive funding, Technical advisory, Connection to more users and a Platform to share their work. So far the Ethereum Foundation led 5 rounds of grants."
//         }
//       ]
//     }
//   }
// }