import { post } from "./http/http";
/**
 * 获取支持的策略列表
 * @param {Record<string, any>} data - 请求参数
 * @returns {Promise<ApiResponse<getSupportStrategiesResponse[]>>} 返回策略配置列表
 */
export const getSupportStrategies = (data = {}) => post('/dataService/getSupportStrategies', data);
