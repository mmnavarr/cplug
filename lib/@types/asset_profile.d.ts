export interface OfficialLink {
    name: string;
    link: string;
}
export interface Overview {
    is_verified: boolean;
    tagline: string;
    category: string;
    sector: string;
    tags: string;
    project_details: string;
    official_links: OfficialLink[];
}
export interface IssuingOrganization {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Background {
    background_details: string;
    issuing_organizations: IssuingOrganization[];
}
export interface Roadmap {
    title: string;
    date: Date;
    type: string;
    details: string;
}
export interface Regulation {
    regulatory_details: string;
    sfar_score: number;
    sfar_summary: string;
}
export interface General {
    overview: Overview;
    background: Background;
    roadmap: Roadmap[];
    regulation: Regulation;
}
export interface Individual {
    slug: string;
    first_name: string;
    last_name: string;
    title: string;
    description: string;
    avatar_url: string;
}
export interface Organization {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Contributors {
    individuals: Individual[];
    organizations: Organization[];
}
export interface Individual2 {
    slug: string;
    first_name: string;
    last_name: string;
    title: string;
    description: string;
    avatar_url: string;
}
export interface Organization2 {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Advisors {
    individuals: Individual2[];
    organizations: Organization2[];
}
export interface Individual3 {
    slug: string;
    first_name: string;
    last_name: string;
    title: string;
    description: string;
    avatar_url: string;
}
export interface Organization3 {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Investors {
    individuals: Individual3[];
    organizations: Organization3[];
}
export interface Asset {
    id: string;
    name: string;
}
export interface Organization4 {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Ecosystem {
    assets: Asset[];
    organizations: Organization4[];
}
export interface BlockExplorer {
    name: string;
    link: string;
}
export interface Multitoken {
    id: string;
    name: string;
}
export interface Token {
    token_name: string;
    token_type: string;
    block_explorers: BlockExplorer[];
    multitoken: Multitoken[];
    token_usage: string;
    token_usage_details_and_wallets: string;
}
export interface General2 {
    launch_style: string;
    launch_details: string;
}
export interface SalesRound {
    title: string;
    start_date: Date;
    type: string;
    details: string;
    end_date: Date;
    native_tokens_allocated: number;
    asset_collected: string;
    price_per_token_in_asset: number;
    equivalent_price_per_token_in_USD: number;
    amount_collected_in_asset: number;
    amount_collected_in_USD: number;
    is_kyc_required: boolean;
    restricted_jurisdictions: string[];
}
export interface SalesDocument {
    name: string;
    link: string;
}
export interface AssetHeld {
    id: string;
    name: string;
}
export interface Address {
}
export interface SalesTreasuryAccount {
    account_type: string;
    asset_held: AssetHeld;
    addresses: Address[];
    security: string;
}
export interface TreasuryPolicy {
    name: string;
    link: string;
}
export interface ProjectedUseOfSalesProceed {
    category: string;
    amount_in_percentage: number;
}
export interface Fundraising {
    sales_rounds: SalesRound[];
    sales_documents: SalesDocument[];
    sales_treasury_accounts: SalesTreasuryAccount[];
    treasury_policies: TreasuryPolicy[];
    projected_use_of_sales_proceeds: ProjectedUseOfSalesProceed[];
}
export interface InitialSupplyRepartition {
    allocated_to_investors_percentage: number;
    allocated_to_organization_or_founders_percentage: number;
    allocated_to_premined_rewards_or_airdrops_percentage: number;
}
export interface InitialDistribution {
    initial_supply: number;
    initial_supply_repartition: InitialSupplyRepartition;
    token_distribution_date: Date;
    genesis_block_date: Date;
}
export interface Launch {
    general: General2;
    fundraising: Fundraising;
    initial_distribution: InitialDistribution;
}
export interface Supply {
    supply_curve_details: string;
    general_emission_type: string;
    precise_emission_type: string;
    is_capped_supply: boolean;
    max_supply: number;
}
export interface Consensus {
    consensus_details: string;
    general_consensus_mechanism: string;
    precise_consensus_mechanism: string;
    targeted_block_time: number;
    block_reward: number;
    mining_algorithm: string;
    next_halving_date: Date;
    is_victim_of_51_percent_attack: boolean;
}
export interface ConsensusAndEmission {
    supply: Supply;
    consensus: Consensus;
}
export interface Address2 {
    name: string;
    link: string;
}
export interface Account {
    account_type: string;
    addresses: Address2[];
}
export interface NativeTreasury {
    accounts: Account[];
    treasury_usage_details: string;
}
export interface Economics {
    token: Token;
    launch: Launch;
    consensus_and_emission: ConsensusAndEmission;
    native_treasury: NativeTreasury;
}
export interface ClientRepository {
    name: string;
    link: string;
    license_type: string;
}
export interface Overview2 {
    technology_details: string;
    client_repositories: ClientRepository[];
}
export interface Audit {
    title: string;
    date: Date;
    type: string;
    details: string;
}
export interface KnownExploitsAndVulnerability {
    title: string;
    date: Date;
    type: string;
    details: string;
}
export interface Security {
    audits: Audit[];
    known_exploits_and_vulnerabilities: KnownExploitsAndVulnerability[];
}
export interface Technology {
    overview: Overview2;
    security: Security;
}
export interface OnchainGovernance {
    onchain_governance_type: string;
    onchain_governance_details: string;
    is_treasury_decentralized: boolean;
}
export interface FundingOrganization {
    slug: string;
    name: string;
    logo: string;
    description: string;
}
export interface Grant {
    funding_organizations: FundingOrganization[];
    grant_program_details: string;
}
export interface Governance {
    governance_details: string;
    onchain_governance: OnchainGovernance;
    grants: Grant[];
}
export interface AssetProfile {
    general: General;
    contributors: Contributors;
    advisors: Advisors;
    investors: Investors;
    ecosystem: Ecosystem;
    economics: Economics;
    technology: Technology;
    governance: Governance;
}
export interface CryptoCurrency {
    id: string;
    symbol: string;
    name: string;
    slug: string;
    profile: AssetProfile;
}
