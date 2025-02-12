import { post } from "./http/http";
/**
 * 获取全部时间窗口
 * @param {Record<string, any>} data - 请求参数
 * @returns {Promise<ApiResponse<getSupportTimeFrameResponse[]>>} 返回时间窗口配置列表
 */
export const getSupportTimeFrame = (data = {}) => post('/dataService/getSupportTimeFrame', data);
