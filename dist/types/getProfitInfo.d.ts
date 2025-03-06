import type { ApiResponse } from './global';
/**
 * 利润信息响应接口
 * @interface getProfitInfoResponse
 * @description 策略执行的买入和卖出信号利润统计信息
 * @property {number} buyTotalProfitRate - 买入信号总收益率
 * @property {number} buyTotalSignalCount - 买入信号总数量
 * @property {number} buyWinRate - 买入信号胜率（范围：0-1）
 * @property {number} buyWinSignalCount - 盈利的买入信号数量
 * @property {number} sellTotalProfitRate - 卖出信号总收益率
 * @property {number} sellTotalSignalCount - 卖出信号总数量
 * @property {number} sellWinRate - 卖出信号胜率（范围：0-1）
 * @property {number} sellWinSignalCount - 盈利的卖出信号数量
 *
 * @example
 * const profitInfo: getProfitInfoResponse = {
 *   buyTotalProfitRate: -10.78868756882018,
 *   buyTotalSignalCount: 33,
 *   buyWinRate: 0.2727272727272727,
 *   buyWinSignalCount: 9,
 *   sellTotalProfitRate: 0.30378189107433984,
 *   sellTotalSignalCount: 9,
 *   sellWinRate: 0.6666666666666666,
 *   sellWinSignalCount: 6
 * }
 */
export interface getProfitInfoResponse {
    /** 买入信号总收益率 */
    buyTotalProfitRate: number;
    /** 买入信号总数量 */
    buyTotalSignalCount: number;
    /** 买入信号胜率（范围：0-1） */
    buyWinRate: number;
    /** 盈利的买入信号数量 */
    buyWinSignalCount: number;
    /** 卖出信号总收益率 */
    sellTotalProfitRate: number;
    /** 卖出信号总数量 */
    sellTotalSignalCount: number;
    /** 卖出信号胜率（范围：0-1） */
    sellWinRate: number;
    /** 盈利的卖出信号数量 */
    sellWinSignalCount: number;
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
export declare const getProfitInfo: (data: getProfitInfoStrategyConditionRequest) => Promise<ApiResponse<getProfitInfoResponse>>;
//# sourceMappingURL=getProfitInfo.d.ts.map