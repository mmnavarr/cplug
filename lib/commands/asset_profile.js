"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_client_1 = __importDefault(require("../utils/http_client"));
var figlet_1 = __importDefault(require("figlet"));
var chalk_1 = __importDefault(require("chalk"));
var console_table_printer_1 = require("console-table-printer");
var cli_html_1 = __importDefault(require("cli-html"));
var plugAssetProfile = function (assetKey) { return __awaiter(void 0, void 0, void 0, function () {
    var crypto_1, officialLinks, existsIndividualContributors, existsOrganizationContributors, showContributors, ic, oc, existsIndividualInvestors, existsOrganizationInvestors, showInvestors, ii, oi, existsIndividualAdvisors, existsOrganizationAdvisors, showAdvisors, ia, oa, existsAssets, existsOrganizations, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, http_client_1.default.get("v2/assets/" + assetKey + "/profile").json()];
            case 1:
                crypto_1 = (_a.sent()).data;
                // Bitcoin general information
                console.log(figlet_1.default.textSync(crypto_1.name, { font: "Ghost" }));
                console.log(cli_html_1.default("\n      <button>" + crypto_1.profile.general.overview.sector + "</button>\n      <button>" + crypto_1.profile.general.overview.category + "</button>\n      <blockquote>" + crypto_1.profile.general.overview.tagline + "</blockquote>\n    "));
                console.log(cli_html_1.default(crypto_1.profile.general.overview.project_details));
                officialLinks = new console_table_printer_1.Table({
                    title: "Official " + crypto_1.symbol + " Links",
                    columns: [
                        { name: "name", title: "Name" },
                        { name: "link", title: "Link" }
                    ]
                });
                officialLinks.addRows(crypto_1.profile.general.overview.official_links);
                officialLinks.printTable();
                existsIndividualContributors = crypto_1.profile.contributors.individuals.length > 0;
                existsOrganizationContributors = crypto_1.profile.contributors.organizations.length > 0;
                showContributors = existsIndividualContributors && existsOrganizationContributors;
                if (showContributors) {
                    console.log(chalk_1.default.bold(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Contributors"], ["Contributors"]))));
                    if (existsIndividualContributors) {
                        ic = crypto_1.profile.contributors.individuals.map(function (ind) { return ind.first_name + " " + ind.last_name; }).join(", ");
                        console.log("Individuals - " + ic);
                    }
                    if (existsOrganizationContributors) {
                        oc = crypto_1.profile.contributors.organizations.map(function (org) { return org.name; }).join(", ");
                        console.log("Organizations - " + oc);
                    }
                }
                existsIndividualInvestors = crypto_1.profile.investors.individuals.length > 0;
                existsOrganizationInvestors = crypto_1.profile.investors.organizations.length > 0;
                showInvestors = existsIndividualInvestors && existsOrganizationInvestors;
                if (showInvestors) {
                    console.log(chalk_1.default.bold(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Investors"], ["Investors"]))));
                    if (existsIndividualInvestors) {
                        ii = crypto_1.profile.investors.individuals.map(function (ind) { return ind.first_name + " " + ind.last_name; }).join(", ");
                        console.log("Individuals - " + ii);
                    }
                    if (existsOrganizationInvestors) {
                        oi = crypto_1.profile.investors.organizations.map(function (org) { return org.name; }).join(", ");
                        console.log("Organizations - " + oi);
                    }
                }
                existsIndividualAdvisors = crypto_1.profile.advisors.individuals.length > 0;
                existsOrganizationAdvisors = crypto_1.profile.advisors.organizations.length > 0;
                showAdvisors = existsIndividualAdvisors && existsOrganizationAdvisors;
                if (showAdvisors) {
                    console.log(chalk_1.default.bold(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Advisors"], ["Advisors"]))));
                    if (existsIndividualAdvisors) {
                        ia = crypto_1.profile.advisors.individuals.map(function (ind) { return ind.first_name + " " + ind.last_name; }).join(", ");
                        console.log("Individuals - " + ia);
                    }
                    if (existsOrganizationAdvisors) {
                        oa = crypto_1.profile.advisors.organizations.map(function (org) { return org.name; }).join(", ");
                        console.log("Organizations - " + oa);
                    }
                }
                existsAssets = crypto_1.profile.ecosystem.assets.length > 0;
                if (existsAssets) {
                    console.log(chalk_1.default.bold(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Assets"], ["Assets"]))));
                    console.log(crypto_1.profile.ecosystem.assets.map(function (a) { return a.name; }).join(", "));
                }
                existsOrganizations = crypto_1.profile.ecosystem.organizations.length > 0;
                if (existsOrganizations) {
                    console.log(chalk_1.default.bold(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Organizations"], ["Organizations"]))));
                    console.log(crypto_1.profile.ecosystem.organizations.map(function (org) { return org.name; }).join(", "));
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.response.body);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = plugAssetProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
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
