

import { post } from './http/http'
import type { ApiResponse } from './global'

/**
 * 利润信息响应接口
 * @interface getProfitInfoResponse
 * @description 策略执行的利润统计信息
 * @property {number} totalSignalCount - 总信号数量
 * @property {number} winSignalCount - 盈利信号数量
 * @property {number} winRate - 胜率（范围：0-1）
 * @property {number} profitRate - 收益率（正数表示盈利，负数表示亏损）
 * 
 * @example
 * const profitInfo: ProfitInfo = {
 *   totalSignalCount: 2,
 *   winSignalCount: 0,
 *   winRate: 0.0,
 *   profitRate: -1.2103766291729423
 * }
 */
export interface getProfitInfoResponse {
    totalSignalCount: number;
    winSignalCount: number;
    winRate: number;
    profitRate: number;
}


/**
 * 策略条件配置接口
 * @interface getProfitInfoStrategyCondition
 * @property {string} strategyId - 策略的唯一标识符
 * @property {string} strategyName - 策略的显示名称
 * @property {string} condition - 比较条件（如：">", "<", "="等）
 * @property {string} threshold - 阈值，以字符串形式表示
 */
export interface getProfitInfoStrategyCondition {
    strategyId: string;
    strategyName: string;
    condition: string;
    threshold: string;
}
export interface getProfitInfoStrategyConditionRequest {
    timeframeValue: number;
    strategyArray: getProfitInfoStrategyCondition[];
}

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
export const getProfitInfo = (data: getProfitInfoStrategyConditionRequest): Promise<ApiResponse<getProfitInfoResponse[]>> =>
    post<ApiResponse<getProfitInfoResponse[]>>('/dataService/getProfitInfo', data)
