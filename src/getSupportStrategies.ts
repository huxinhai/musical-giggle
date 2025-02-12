import type { ApiResponse } from "./global";
import { post } from "./http/http";


/**
 * 条件运算符类型
 * 支持的比较运算符: ">" | "<" | "=" | ">=" | "<="
 */
export type getSupportStrategiesConditionOperator = ">" | "<" | "=" | ">=" | "<=";

/**
 * 条件数据类型
 * 当前支持: "number" | "string" | "boolean"
 */
export type getSupportStrategiesConditionDataType = "number" | "string" | "boolean";

/**
 * 策略配置接口
 * @interface Strategy
 * @property {getSupportStrategiesConditionOperator[]} supportCondition - 支持的条件运算符列表
 * @property {getSupportStrategiesConditionDataType} conditionType - 条件数据类型
 * @property {string} strategyId - 策略唯一标识符
 * @property {string} strategyName - 策略显示名称
 */
export interface getSupportStrategiesResponse {
    supportCondition: getSupportStrategiesConditionOperator[];
    conditionType: getSupportStrategiesConditionDataType;
    strategyId: string;
    strategyName: string;
}
/**
 * 获取支持的策略列表
 * @param {Record<string, any>} data - 请求参数
 * @returns {Promise<ApiResponse<getSupportStrategiesResponse[]>>} 返回策略配置列表
 */
export const getSupportStrategies = (data: Record<string, any> = {}): Promise<ApiResponse<getSupportStrategiesResponse[]>> =>
    post<ApiResponse<getSupportStrategiesResponse[]>>('/dataService/getSupportStrategies', data);