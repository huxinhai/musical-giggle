import type { getProfitInfoStrategyCondition } from "./getProfitInfo";
import type { ApiResponse, Pagination } from "./global";
/**
 * 获取信号的实时价格数据
 * @interface GetSignalRealTimePriceData
 */
export interface GetSignalRealTimePriceData {
    meta: GetSignalTokenMetaInfo;
    social: GetSignalSocialInfo;
    market: {
        pair: string;
        price: number;
        market_cap: number;
    };
}
/**
 * 获取信号的实时价格响应
 * @interface GetSignalRealTimePrice
 */
export interface GetSignalRealTimePrice {
    code: number;
    description: string;
    data: GetSignalRealTimePriceData;
}
/**
 * 获取信号的代币基础元数据
 * @interface GetSignalTokenMetaInfo
 */
export interface GetSignalTokenMetaInfo {
    chain: string;
    address: string;
    creator_address: string;
    symbol: string;
    name: string;
    decimals: number;
    logo: string;
    launchpad: string;
    launchpad_status: string;
    creation_timestamp: number;
}
/**
 * 获取信号的代币元数据
 * @interface GetSignalMetaInfo
 */
export interface GetSignalMetaInfo extends GetSignalTokenMetaInfo {
    total_supply: number;
    rtPrice: GetSignalRealTimePrice;
}
/**
 * 获取信号的社交媒体信息
 * @interface GetSignalSocialInfo
 */
export interface GetSignalSocialInfo {
    uri: string;
    logo: string;
    telegram: string;
    discord: string;
    website: string;
    description: string;
    twitter: string;
}
/**
 * 获取信号的信号信息
 * @interface GetSignalInfo
 */
export interface GetSignalInfo {
    signal_count: number;
    first_time: number;
    first_price: number;
    max_price: number;
    max_price_gain: number;
    signal_tags: string[];
    token_level: string;
}
/**
 * 获取信号的市场指标信息
 * @interface GetSignalMetricInfo
 */
export interface GetSignalMetricInfo {
    pair: string;
    token_reserve: number;
    price: number;
    liquidity: number;
    volume_24h: number;
    market_cap: number;
    holder_count: number;
    top10_position: number;
}
/**
 * 获取信号的策略信息
 * @interface GetSignalStrategyInfo
 */
export interface GetSignalStrategyInfo {
    group_id: number;
    group_name: string;
    group_type: string;
    strategy_id: number;
    user_id: number;
}
/**
 * 获取信号的元数据
 * @interface GetSignalMeta
 */
export interface GetSignalMeta {
    create_time: number;
    deleted: boolean;
    id: string;
    read: boolean;
    strategy_info: GetSignalStrategyInfo;
}
/**
 * 获取信号的钱包统计
 * @interface GetSignalWalletStat
 */
export interface GetSignalWalletStat {
    alias: string;
    amount: string;
    amount_origin: number;
    last_trade_time: number;
    price: string;
    token: string;
    token_symbol: string;
    volume: string;
    wallet: string;
}
/**
 * 获取信号的代币交易统计
 * @interface GetSignalTokenTradingStat
 */
export interface GetSignalTokenTradingStat {
    fdv: number;
    holders: number;
    lastUpdateTime: number;
    liquidity: number;
    mkt_cap: number;
    percent12h: number;
    percent1h: number;
    percent1m: number;
    percent24h: number;
    percent5m: number;
    volume_12h: number;
    volume_1h: number;
    volume_1minutes: number;
    volume_24h: number;
    volume_5minutes: number;
    volume_6h: number;
}
/**
 * 获取信号的监控记录数据
 * @interface GetSignalMonitorRecordData
 */
export interface GetSignalMonitorRecordData {
    chain: string;
    strategy_id: number;
    swap: string;
    token: string;
    token_symbol: string;
    token_trading_stat: GetSignalTokenTradingStat;
    user_id: number;
    wallet_stats: GetSignalWalletStat[];
}
/**
 * 获取信号的监控数据
 * @interface GetSignalMonitorData
 */
export interface GetSignalMonitorData {
    monitor_type: string;
    record_data: GetSignalMonitorRecordData;
    unix_time: number;
    version: string;
}
/**
 * 获取信号的详细信息
 * @interface GetSignalDetail
 */
export interface GetSignalDetail {
    id: number;
    timestamp: number;
    gmtCreate: string;
    gmtModified: string;
    signalId: string;
    tokenAddress: string;
    metaInfo: GetSignalMetaInfo;
    signalInfo: GetSignalInfo;
    metricInfo: GetSignalMetricInfo;
    safeInfo: Record<string, any>;
    socialInfo: GetSignalSocialInfo;
    tokenTags: string[];
    signalMeta: GetSignalMeta;
    monitorData: GetSignalMonitorData;
}
/**
 * 获取信号的响应数据
 * @interface GetSignalResponse
 */
export interface GetSignalResponse {
    array: GetSignalDetail[];
    totalCount: number;
}
export interface getSignalResponse {
    startTime: number;
    strategyArray: getProfitInfoStrategyCondition[];
}
export interface getSignalResponsePage extends Pagination {
    strategyArray: getProfitInfoStrategyCondition[];
}
/**
 * 获取信号列表
 * @async
 * @function getSignal
 * @param {getSignalResponsePage | getSignalResponse} data - 请求参数
 * @returns {Promise<ApiResponse<GetSignalResponse>>} 返回信号列表数据
 *
 * @example
 * const response = await getSignal({
 *   page: 1,
 *   pageSize: 10
 * });
 * console.log(`总信号数: ${response.data.totalCount}`);
 * console.log(`第一个信号价格: ${response.data.array[0].metricInfo.price}`);
 */
export declare const getSignal: (data: getSignalResponsePage | getSignalResponse) => Promise<ApiResponse<GetSignalResponse>>;
//# sourceMappingURL=getSignal.d.ts.map