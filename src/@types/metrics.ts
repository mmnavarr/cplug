export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  tagline: string;
  overview: string;
  background: string;
  category: string; // 'Payments',
  sector: string; // 'Currencies',
  tag: string;
  sfarScore: number;
  token_distribution: TokenDistribution;
  token_details: TokenDetails;
}

export interface TokenDistribution {
  sale_start: Date | null;
  sale_end: Date | null;
  initial_distribution: number;
  current_supply: number | null;
  max_supply: number;
  description: string;
}

export interface TokenDetails {
  usage: string; // 'Payments',
  type: string; // 'Native',
  sales_rounds: number | null;
  block_reward: number; // 6.25,
  targeted_block_time_in_sec: number; // 600,
  on_chain_governance_structure: string | null;
  is_treasury_decentralized: boolean;
  launch_style: string; // 'Fair Launch',
  initial_supply: number;
  percentage_allocated_to_investors_from_initial_supply: number;
  percentage_allocated_to_premined_or_airdrops_from_initial_supply: number;
  percentage_allocated_to_organizations_or_founders_supply: number;
  mining_algorithm: string; // 'SHA-256',
  next_halving_date: string; // '2024-05-10',
  genesis_block_date: string; // '2009-01-03',
  is_victim_of_51_percent_attack: boolean; // false,
  emission_type_general: string; // 'Inflationary',
  emission_type_precise: string; // 'Decreasing Issuance',
  is_capped_supply: boolean; // true,
  max_supply: number; // 20999999.9769
}

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  market_data: MarketData;
  marketcap: Marketcap;
  supply: Supply;
  blockchain_stats_24_hours: Blockchain24HourStats;
  all_time_high: AllTimeHigh;
  token_sale_stats: TokenSaleStats;
  staking_stats: StakingStats;
  mining_stats: MiningStats;
  developer_activity: DeveloperActivity;
  roi_data: ROIData;
  roi_by_year: ROIByYear;
  lend_rates: LendRates;
  borrow_rates: BorrowRates;
  loan_data: LoanData;
  reddit: Reddit;
  on_chain_data: OnChainData;
  exchange_flows: ExchangeFlow;
}

export interface MarketData {
  price_usd: number; // 56195.81231143931,
  price_btc: number; // 1,
  price_eth: number; // 28.76464133785447,
  volume_last_24_hours: number; // 65520742592.29339,
  real_volume_last_24_hours: number; // 12655923780.983517,
  volume_last_24_hours_overstatement_multiple: number; // 5.177081003817617,
  percent_change_usd_last_1_hour: number; // 0.23902364005351123,
  percent_change_usd_last_24_hours: number; // 9.700487539643971,
  percent_change_btc_last_24_hours: number; // 0,
  percent_change_eth_last_24_hours: number; // 7.561443067817051,
  ohlcv_last_1_hour: OHLCV;
  ohlcv_last_24_hour: OHLCV;
  last_trade_at: Date; // '2021-02-20T03:01:59.583Z'
}

export interface OHLCV {
  open: number; // 7197.467535968304,
  high: number; // 7208.544343587009,
  low: number; // 7179.140622464517,
  close: number; // 7184.797466679892,
  volume: number; // 9690910.565409226
}

export interface Marketcap {
  marketcap_dominance_percent: number; // 60.61002017302154,
  current_marketcap_usd: number; // 1038274083221.7977,
  y_2050_marketcap_usd: number; // 1168978544225.922,
  y_plus10_marketcap_usd: number; // 1147093572171.1648,
  liquid_marketcap_usd: number; // 1037991742192.672,
  realized_marketcap_usd: number; // 259416913094.3885,
  volume_turnover_last_24_hours_percent: number; // 1.1859111166469503
}

export interface Supply {
  y_2050: number; // 135135633.79999998,
  y_plus10: number; // 122028694.08,
  liquid: number; // 114112477.86,
  circulating: number; // 113760865.883201,
  y_2050_issued_percent: number; // 84.44292201188463,
  annual_inflation_percent: number; // 1.8593602030122458,
  stock_to_flow: number; // 53.781940604082834,
  y_plus10_issued_percent: number; // 93.51282394711995
}

export interface Blockchain24HourStats {
  count_of_active_addresses: number; // 602485,
  transaction_volume: number; // 15595011141.025295,
  adjusted_transaction_volume: number; // 11088865618.798641,
  adjusted_nvt: number; // 19.993159300452,
  median_tx_value: number; // 384.79349358897764,
  median_tx_fee: number; // 11.240837850189386,
  count_of_tx: number; // 1298425,
  count_of_payments: number; // 803485,
  new_issuance: number; // 25981031.42359722,
  average_difficulty: number; // 5059295587243820,
  kilobytes_added: number; // 304343.211,
  count_of_blocks_added: number; // 6447
}

export interface AllTimeHigh {
  price: number; // 2019.043430460839,
  at: Date; // '2021-02-20T04:00:00Z',
  days_since: number; // 0,
  percent_down: number; // -0,
  breakeven_multiple: number; // 1
}

export interface TokenSaleStats {
  sale_proceeds_usd: number; // 16000000,
  sale_start_date: Date; // '2014-07-25',
  sale_end_date: Date; // '2014-08-22',
  roi_since_sale_usd_percent: number; // 647868.6358506555,
  roi_since_sale_btc_percent: number; // 1241.912279991531,
  roi_since_sale_eth_percent: number | null; // null
}

export interface StakingStats {
  staking_yield_percent: number; // 4.3,
  staking_type: string; // 'Proof of Stake',
  staking_minimum: number; // 32,
  tokens_staked: number | null,
  tokens_staked_percent: number | null,
  real_staking_yield_percent: number; // 2.3960878922893114
}

export interface MiningStats {
  mining_algo: string; // 'SHA-256',
  network_hash_rate: string; // '170264 PH/s',
  available_on_nicehash_percent: number; // 0.31882232023035656,
  '1_hour_attack_cost': number; // 3783507.788785113,
  '24_hours_attack_cost': number; // 90804186.93084271,
  attack_appeal: number; // 11501.24085656595,
  mining_revenue_native: number; // 1003.64607271,
  mining_revenue_usd: number; // 51765156.082779124,
  average_difficulty: number; // 21434395961348.92
}

export interface DeveloperActivity {
  stars: number; // 49640,
  watchers: number; // 3703,
  commits_last_3_months: number; // 291,
  commits_last_1_year: number; // 1339,
  lines_added_last_3_months: number; // 6180,
  lines_added_last_1_year: number; // 95752,
  lines_deleted_last_3_months: number; // 4336,
  lines_deleted_last_1_year: number; // 78643
}

export interface ROIData {
  percent_change_last_1_week: number; // 17.824627645056033,
  percent_change_last_1_month: number; // 80.2571042095724,
  percent_change_last_3_months: number; // 202.06100497707888,
  percent_change_last_1_year: number; // 473.94596520696666,
  percent_change_btc_last_1_week: number; // 0,
  percent_change_btc_last_1_month: number; // 0,
  percent_change_btc_last_3_months: number; // 0,
  percent_change_btc_last_1_year: number; // 0,
  percent_change_eth_last_1_week: number; // 5.805930729296728,
  percent_change_eth_last_1_month: number; // -1.001628110426144,
  percent_change_eth_last_3_months: number; // -16.405759586171214,
  percent_change_eth_last_1_year: number; // -24.670938034720148,
  percent_change_month_to_date: number; // 65.76210342251107,
  percent_change_quarter_to_date: number; // 89.19023510267998,
  percent_change_year_to_date: number; // 89.19023510267998
}

export interface ROIByYear {
  '2020_usd_percent': number; // 301.45619677746635,
  '2019_usd_percent': number; // 83.83497240467483,
  '2018_usd_percent': number; // -72.35180629416075,
  '2017_usd_percent': number; // 1293.9968257264447,
  '2016_usd_percent': number; // 122.23036668622065,
  '2015_usd_percent': number; // 36.81278481514266,
  '2014_usd_percent': number; // -57.34726933565019,
  '2013_usd_percent': number; // 5394.285470792129,
  '2012_usd_percent': number; // 156.47080487351116,
  '2011_usd_percent': number; // 1474.0066666666667
}

export type LendRates = {
  [key in string]: number; // 4.0693,
}

export type BorrowRates = {
  [key in string]: number; // 4.0693,
}

export interface LoanData {
  originated_last_24_hours_usd: number; // 0,
  outstanding_debt_usd: number; // 3340103.807638321,
  repaid_last_24_hours_usd: number; // 5236217.961313204,
  collateralized_last_24_hours_usd: number; // 17728216.50224074,
  collateral_liquidated_last_24_hours_usd: number; // 1445.325990317614
}

export interface Reddit {
  active_user_count: number; // 15590
  subscribers: number; // 2452362
}

export interface OnChainData {
  txn_count_last_24_hours: number; // 317446,
  transfer_count_last_24_hours: number; // 966333,
  txn_volume_last_24_hours_usd: number; // 29659206175.138775,
  active_addresses: number; // 1138881,
  total_fees_last_24_hours_usd: number; // 7613017.46561573,
  total_fees_last_24_hours: number; // 147.39607271,
  average_fee_usd: number; // 23.98216047851914,
  median_fee_usd: number; // 12.490019914962739,
  average_transfer_value_usd: number; // 30692.531637790427,
  median_transfer_value_usd: number; // 198.00519165413118,
  adjusted_nvt: number; // 72.22851578375,
  issuance_last_24_hours_usd: number; // 44225372.393461436,
  issuance_rate: number; // 1.67754,
  hash_rate: number; // 145974815.72488672,
  blocks_added_last_24_hours: number; // 137,
  block_size_bytes_total: number; // 179066359,
  block_size_bytes_average: number; // 1307053.715328467
}

export interface ExchangeFlow {
  supply_exchange_usd: number; // 68985793228.33049,
  flow_in_exchange_native_units_inclusive: number; // 39770.25774104,
  flow_in_exchange_usd_inclusive: number; // 2054136594.197298,
  flow_in_exchange_native_units: number; // 27403.07869775,
  flow_in_exchange_usd: number; // 1415370931.544904,
  flow_out_exchange_native_units_inclusive: number; // 46448.2543889,
  flow_out_exchange_usd_inclusive: number; // 2399055588.17557,
  flow_out_exchange_native_units: number; // 34081.07534561,
  flow_out_exchange_usd: number; // 1760289925.5231762
}