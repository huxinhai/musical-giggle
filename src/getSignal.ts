import type { getProfitInfoStrategyCondition } from "./getProfitInfo";
import type { ApiResponse, Pagination } from "./global";
import { post } from "./http/http";


/**
 * 获取信号的实时价格数据
 * @interface GetSignalRealTimePriceData
 * @property {GetSignalTokenMetaInfo} meta - 代币元数据信息
 * @property {GetSignalSocialInfo} social - 社交媒体信息
 * @property {Object} market - 市场相关信息
 * @property {string} market.pair - 交易对
 * @property {number} market.price - 当前价格
 * @property {number} market.market_cap - 市值
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
 * @property {number} code - 响应状态码
 * @property {string} description - 响应描述
 * @property {GetSignalRealTimePriceData} data - 实时价格数据
 */
export interface GetSignalRealTimePrice {
    code: number;
    description: string;
    data: GetSignalRealTimePriceData;
}

/**
 * 获取信号的代币基础元数据
 * @interface GetSignalTokenMetaInfo
 * @property {string} chain - 区块链网络
 * @property {string} address - 代币合约地址
 * @property {string} creator_address - 代币创建者地址
 * @property {string} symbol - 代币符号
 * @property {string} name - 代币名称
 * @property {number} decimals - 代币精度
 * @property {string} logo - 代币logo URL
 * @property {string} launchpad - 发射台名称
 * @property {string} launchpad_status - 发射台状态
 * @property {number} creation_timestamp - 代币创建时间戳
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
 * @extends {GetSignalTokenMetaInfo}
 * @property {number} total_supply - 代币总供应量
 * @property {GetSignalRealTimePrice} rtPrice - 实时价格信息
 */
export interface GetSignalMetaInfo extends GetSignalTokenMetaInfo {
    total_supply: number;
    rtPrice: GetSignalRealTimePrice;
}

/**
 * 获取信号的社交媒体信息
 * @interface GetSignalSocialInfo
 * @property {string} uri - 社交媒体统一资源标识符
 * @property {string} logo - 项目logo URL
 * @property {string} telegram - Telegram群组链接
 * @property {string} discord - Discord服务器链接
 * @property {string} website - 项目官网
 * @property {string} description - 项目描述
 * @property {string} twitter - Twitter账号链接
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
 * @property {number} signal_count - 信号触发次数
 * @property {number} first_time - 首次触发时间戳
 * @property {number} first_price - 首次触发时价格
 * @property {number} max_price - 历史最高价格
 * @property {number} max_price_gain - 最大价格涨幅
 * @property {string[]} signal_tags - 信号标签列表
 * @property {string} token_level - 代币等级
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
 * @property {string} pair - 交易对
 * @property {number} token_reserve - 代币储备量
 * @property {number} price - 当前价格
 * @property {number} liquidity - 流动性
 * @property {number} volume_24h - 24小时交易量
 * @property {number} market_cap - 市值
 * @property {number} holder_count - 持有人数量
 * @property {number} top10_position - 前10大持有者持仓占比
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
 * @property {number} group_id - 策略组ID
 * @property {string} group_name - 策略组名称
 * @property {string} group_type - 策略组类型
 * @property {number} strategy_id - 策略ID
 * @property {number} user_id - 用户ID
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
 * @property {number} create_time - 创建时间戳
 * @property {boolean} deleted - 是否已删除
 * @property {string} id - 唯一标识符
 * @property {boolean} read - 是否已读
 * @property {GetSignalStrategyInfo} strategy_info - 策略信息
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
 * @property {string} alias - 钱包别名
 * @property {string} amount - 交易金额
 * @property {number} amount_origin - 原始交易金额
 * @property {number} last_trade_time - 最后交易时间戳
 * @property {string} price - 交易价格
 * @property {string} token - 代币地址
 * @property {string} token_symbol - 代币符号
 * @property {string} volume - 交易量
 * @property {string} wallet - 钱包地址
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
 * @property {number} fdv - 完全稀释估值
 * @property {number} holders - 持有人数量
 * @property {number} lastUpdateTime - 最后更新时间戳
 * @property {number} liquidity - 流动性
 * @property {number} mkt_cap - 市值
 * @property {number} percent12h - 12小时价格变化百分比
 * @property {number} percent1h - 1小时价格变化百分比
 * @property {number} percent1m - 1分钟价格变化百分比
 * @property {number} percent24h - 24小时价格变化百分比
 * @property {number} percent5m - 5分钟价格变化百分比
 * @property {number} volume_12h - 12小时交易量
 * @property {number} volume_1h - 1小时交易量
 * @property {number} volume_1minutes - 1分钟交易量
 * @property {number} volume_24h - 24小时交易量
 * @property {number} volume_5minutes - 5分钟交易量
 * @property {number} volume_6h - 6小时交易量
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
 * @property {string} chain - 区块链网络
 * @property {number} strategy_id - 策略ID
 * @property {string} swap - 交易所名称
 * @property {string} token - 代币地址
 * @property {string} token_symbol - 代币符号
 * @property {GetSignalTokenTradingStat} token_trading_stat - 代币交易统计
 * @property {number} user_id - 用户ID
 * @property {GetSignalWalletStat[]} wallet_stats - 钱包统计列表
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
 * @property {string} monitor_type - 监控类型
 * @property {GetSignalMonitorRecordData} record_data - 监控记录数据
 * @property {number} unix_time - Unix时间戳
 * @property {string} version - 版本号
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
 * @property {number} id - 信号的唯一标识符
 * @property {number} timestamp - 信号生成的时间戳
 * @property {string} gmtCreate - 信号创建时间（GMT格式）
 * @property {string} gmtModified - 信号最后修改时间（GMT格式）
 * @property {string} signalId - 信号的字符串标识符
 * @property {string} tokenAddress - 代币合约地址
 * @property {GetSignalMetaInfo} metaInfo - 代币的元数据信息
 * @property {GetSignalInfo} signalInfo - 信号的基本信息
 * @property {GetSignalMetricInfo} metricInfo - 信号的市场指标信息
 * @property {Record<string, any>} safeInfo - 安全相关信息
 * @property {GetSignalSocialInfo} socialInfo - 社交媒体相关信息
 * @property {string[]} tokenTags - 代币标签列表
 * @property {GetSignalMeta} signalMeta - 信号的元数据
 * @property {GetSignalMonitorData} monitorData - 信号的监控数据
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
 * 获取信号列表的响应数据
 * @interface GetSignalResponse
 * @property {GetSignalDetail[]} array - 信号详情列表
 * @property {number} totalCount - 信号总数
 */
export interface GetSignalResponse {
    array: GetSignalDetail[];
    totalCount: number;
}

/**
 * 获取信号请求的响应数据
 * @interface getSignalResponse
 * @property {number} startTime - 开始时间戳
 * @property {getProfitInfoStrategyCondition[]} strategyArray - 策略条件数组
 */
export interface getSignalResponse {
    startTime: number
    strategyArray: getProfitInfoStrategyCondition[]
}

/**
 * 获取信号请求的分页响应数据
 * @interface getSignalResponsePage
 * @extends {Pagination}
 * @property {getProfitInfoStrategyCondition[]} strategyArray - 策略条件数组
 */
export interface getSignalResponsePage extends Pagination {
    strategyArray: getProfitInfoStrategyCondition[]
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
export const getSignal = (data: getSignalResponsePage | getSignalResponse): Promise<ApiResponse<GetSignalResponse>> =>
    post<ApiResponse<GetSignalResponse>>('/dataService/getSignal', data)

