import type { ApiResponse } from "./global";
import { post } from "./http/http";

/**
 * 代币实时价格数据中的市场信息
 * @interface TokenMarketInfo
 * @property {string} pair - 交易对
 * @property {number} price - 当前价格
 * @property {number} market_cap - 市值
 */
interface TokenMarketInfo {
    pair: string;
    price: number;
    market_cap: number;
}

/**
 * 代币实时价格数据中的社交信息
 * @interface TokenSocialInfo
 * @property {string} uri - 社交媒体统一资源标识符
 * @property {string} logo - 项目logo URL
 * @property {string} telegram - Telegram群组链接
 * @property {string} discord - Discord服务器链接
 * @property {string} website - 项目官网
 * @property {string} description - 项目描述
 * @property {string} twitter - Twitter账号链接
 */
interface TokenSocialInfo {
    uri: string;
    logo: string;
    telegram: string;
    discord: string;
    website: string;
    description: string;
    twitter: string;
}

/**
 * 代币元数据信息
 * @interface TokenMetaInfo
 * @property {string} chain - 区块链网络
 * @property {string} address - 代币合约地址
 * @property {string} creator_address - 代币创建者地址
 * @property {string} symbol - 代币符号
 * @property {string} name - 代币名称
 * @property {number} decimals - 代币精度
 * @property {string} logo - 代币logo URL
 * @property {number} total_supply - 代币总供应量
 * @property {string} launchpad - 发射台名称
 * @property {string} launchpad_status - 发射台状态
 * @property {number} creation_timestamp - 代币创建时间戳
 */
interface TokenMetaInfo {
    chain: string;
    address: string;
    creator_address: string;
    symbol: string;
    name: string;
    decimals: number;
    logo: string;
    total_supply: number;
    launchpad: string;
    launchpad_status: string;
    creation_timestamp: number;
}

/**
 * 代币实时价格数据
 * @interface TokenRealTimePriceData
 * @property {TokenMetaInfo} meta - 代币元数据信息
 * @property {TokenSocialInfo} social - 社交媒体信息
 * @property {TokenMarketInfo} market - 市场相关信息
 */
interface TokenRealTimePriceData {
    meta: TokenMetaInfo;
    social: TokenSocialInfo;
    market: TokenMarketInfo;
}

/**
 * 代币实时价格响应
 * @interface TokenRealTimePrice
 * @property {number} code - 响应状态码
 * @property {string} description - 响应描述
 * @property {TokenRealTimePriceData} data - 实时价格数据
 */
interface TokenRealTimePrice {
    code: number;
    description: string;
    data: TokenRealTimePriceData;
}

/**
 * 代币最新信息
 * @interface TokenLatestInfo
 * @property {string} chain - 区块链网络
 * @property {string} address - 代币合约地址
 * @property {string} creator_address - 代币创建者地址
 * @property {string} symbol - 代币符号
 * @property {string} name - 代币名称
 * @property {number} decimals - 代币精度
 * @property {string} logo - 代币logo URL
 * @property {number} total_supply - 代币总供应量
 * @property {string} launchpad - 发射台名称
 * @property {string} launchpad_status - 发射台状态
 * @property {number} creation_timestamp - 代币创建时间戳
 * @property {TokenRealTimePrice} rtPrice - 实时价格信息
 * @property {number} price - 当前价格
 * @property {number} marketCap - 市值
 * @property {number} poolSize - 流动池大小
 * @property {number} holders - 持有人数量
 * @property {number} lastUpdateTime - 最后更新时间戳
 */
interface TokenLatestInfo {
    chain: string;
    address: string;
    creator_address: string;
    symbol: string;
    name: string;
    decimals: number;
    logo: string;
    total_supply: number;
    launchpad: string;
    launchpad_status: string;
    creation_timestamp: number;
    rtPrice: TokenRealTimePrice;
    price: number;
    marketCap: number;
    poolSize: number;
    holders: number;
    lastUpdateTime: number;
}

/**
 * 获取代币最新信息的响应
 * @interface GetTokenLatestInfoResponse
 * @property {Record<string, TokenLatestInfo>} [key: string] - 以代币地址为键的代币信息映射
 */
interface GetTokenLatestInfoResponse {
    [key: string]: TokenLatestInfo;
}

/**
 * 获取代币最新信息的请求参数
 * @interface GetTokenLatestInfoParams
 * @property {string} ids - 代币地址列表，以逗号分隔
 */
interface GetTokenLatestInfoParams {
    ids: string;
}

/**
 * 获取代币的最新信息
 * @async
 * @function getTokenLatestInfo
 * @param {GetTokenLatestInfoParams} data - 请求参数
 * @returns {Promise<GetTokenLatestInfoResponse>} 返回代币最新信息
 * 
 * @example
 * const response = await getTokenLatestInfo({
 *   ids: "CKS6qSkP2caywGiT2qdVQ5HfyoM2s7kreHHP6mQ3pump"
 * });
 * console.log(response["CKS6qSkP2caywGiT2qdVQ5HfyoM2s7kreHHP6mQ3pump"].price);
 */
export const getTokenLatestInfo = async (data: GetTokenLatestInfoParams): Promise<ApiResponse<GetTokenLatestInfoResponse>> =>
    post<ApiResponse<GetTokenLatestInfoResponse>>('/dataService/getTokenLatestInfo', data);