export interface CryptoCurrency {
    id: string;
    symbol: string;
    name: string;
    slug: string;
    tagline: string;
    overview: string;
    background: string;
    category: string;
    sector: string;
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
    usage: string;
    type: string;
    sales_rounds: number | null;
    block_reward: number;
    targeted_block_time_in_sec: number;
    on_chain_governance_structure: string | null;
    is_treasury_decentralized: boolean;
    launch_style: string;
    initial_supply: number;
    percentage_allocated_to_investors_from_initial_supply: number;
    percentage_allocated_to_premined_or_airdrops_from_initial_supply: number;
    percentage_allocated_to_organizations_or_founders_supply: number;
    mining_algorithm: string;
    next_halving_date: string;
    genesis_block_date: string;
    is_victim_of_51_percent_attack: boolean;
    emission_type_general: string;
    emission_type_precise: string;
    is_capped_supply: boolean;
    max_supply: number;
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
    price_usd: number;
    price_btc: number;
    price_eth: number;
    volume_last_24_hours: number;
    real_volume_last_24_hours: number;
    volume_last_24_hours_overstatement_multiple: number;
    percent_change_usd_last_1_hour: number;
    percent_change_usd_last_24_hours: number;
    percent_change_btc_last_24_hours: number;
    percent_change_eth_last_24_hours: number;
    ohlcv_last_1_hour: OHLCV;
    ohlcv_last_24_hour: OHLCV;
    last_trade_at: Date;
}
export interface OHLCV {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
export interface Marketcap {
    marketcap_dominance_percent: number;
    current_marketcap_usd: number;
    y_2050_marketcap_usd: number;
    y_plus10_marketcap_usd: number;
    liquid_marketcap_usd: number;
    realized_marketcap_usd: number;
    volume_turnover_last_24_hours_percent: number;
}
export interface Supply {
    y_2050: number;
    y_plus10: number;
    liquid: number;
    circulating: number;
    y_2050_issued_percent: number;
    annual_inflation_percent: number;
    stock_to_flow: number;
    y_plus10_issued_percent: number;
}
export interface Blockchain24HourStats {
    count_of_active_addresses: number;
    transaction_volume: number;
    adjusted_transaction_volume: number;
    adjusted_nvt: number;
    median_tx_value: number;
    median_tx_fee: number;
    count_of_tx: number;
    count_of_payments: number;
    new_issuance: number;
    average_difficulty: number;
    kilobytes_added: number;
    count_of_blocks_added: number;
}
export interface AllTimeHigh {
    price: number;
    at: Date;
    days_since: number;
    percent_down: number;
    breakeven_multiple: number;
}
export interface TokenSaleStats {
    sale_proceeds_usd: number;
    sale_start_date: Date;
    sale_end_date: Date;
    roi_since_sale_usd_percent: number;
    roi_since_sale_btc_percent: number;
    roi_since_sale_eth_percent: number | null;
}
export interface StakingStats {
    staking_yield_percent: number;
    staking_type: string;
    staking_minimum: number;
    tokens_staked: number | null;
    tokens_staked_percent: number | null;
    real_staking_yield_percent: number;
}
export interface MiningStats {
    mining_algo: string;
    network_hash_rate: string;
    available_on_nicehash_percent: number;
    '1_hour_attack_cost': number;
    '24_hours_attack_cost': number;
    attack_appeal: number;
    mining_revenue_native: number;
    mining_revenue_usd: number;
    average_difficulty: number;
}
export interface DeveloperActivity {
    stars: number;
    watchers: number;
    commits_last_3_months: number;
    commits_last_1_year: number;
    lines_added_last_3_months: number;
    lines_added_last_1_year: number;
    lines_deleted_last_3_months: number;
    lines_deleted_last_1_year: number;
}
export interface ROIData {
    percent_change_last_1_week: number;
    percent_change_last_1_month: number;
    percent_change_last_3_months: number;
    percent_change_last_1_year: number;
    percent_change_btc_last_1_week: number;
    percent_change_btc_last_1_month: number;
    percent_change_btc_last_3_months: number;
    percent_change_btc_last_1_year: number;
    percent_change_eth_last_1_week: number;
    percent_change_eth_last_1_month: number;
    percent_change_eth_last_3_months: number;
    percent_change_eth_last_1_year: number;
    percent_change_month_to_date: number;
    percent_change_quarter_to_date: number;
    percent_change_year_to_date: number;
}
export interface ROIByYear {
    '2020_usd_percent': number;
    '2019_usd_percent': number;
    '2018_usd_percent': number;
    '2017_usd_percent': number;
    '2016_usd_percent': number;
    '2015_usd_percent': number;
    '2014_usd_percent': number;
    '2013_usd_percent': number;
    '2012_usd_percent': number;
    '2011_usd_percent': number;
}
export declare type LendRates = {
    [key in string]: number;
};
export declare type BorrowRates = {
    [key in string]: number;
};
export interface LoanData {
    originated_last_24_hours_usd: number;
    outstanding_debt_usd: number;
    repaid_last_24_hours_usd: number;
    collateralized_last_24_hours_usd: number;
    collateral_liquidated_last_24_hours_usd: number;
}
export interface Reddit {
    active_user_count: number;
    subscribers: number;
}
export interface OnChainData {
    txn_count_last_24_hours: number;
    transfer_count_last_24_hours: number;
    txn_volume_last_24_hours_usd: number;
    active_addresses: number;
    total_fees_last_24_hours_usd: number;
    total_fees_last_24_hours: number;
    average_fee_usd: number;
    median_fee_usd: number;
    average_transfer_value_usd: number;
    median_transfer_value_usd: number;
    adjusted_nvt: number;
    issuance_last_24_hours_usd: number;
    issuance_rate: number;
    hash_rate: number;
    blocks_added_last_24_hours: number;
    block_size_bytes_total: number;
    block_size_bytes_average: number;
}
export interface ExchangeFlow {
    supply_exchange_usd: number;
    flow_in_exchange_native_units_inclusive: number;
    flow_in_exchange_usd_inclusive: number;
    flow_in_exchange_native_units: number;
    flow_in_exchange_usd: number;
    flow_out_exchange_native_units_inclusive: number;
    flow_out_exchange_usd_inclusive: number;
    flow_out_exchange_native_units: number;
    flow_out_exchange_usd: number;
}
