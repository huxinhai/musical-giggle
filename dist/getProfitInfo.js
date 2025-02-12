import { post } from './http/http';
/**
 * 获取利润信息
 * @async
 * @function getProfitInfo
 * @param {getProfitInfoStrategyCondition} data - 请求参数，包含时间窗口和策略条件
 * @returns {Promise<ApiResponse<getProfitInfoResponse>>} 返回利润统计信息的 Promise
 *
 * @example
 * const response = await getProfitInfo({
 *   timeframeValue: 10800000,
 *   strategyArray: [{
 *     strategyId: "marketCap",
 *     strategyName: "市值 (USDT)",
 *     condition: ">",
 *     threshold: "10000"
 *   }]
 * });
 * console.log(`总收益率: ${response.data.profitRate}%`);
 * console.log(`胜率: ${response.data.winRate * 100}%`);
 *
 * @throws {Error} 当网络请求失败时可能抛出错误
 */
export const getProfitInfo = (data) => post('/dataService/getProfitInfo', data);
