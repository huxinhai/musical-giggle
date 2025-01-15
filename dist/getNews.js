import { post } from "./http/http";
/**
 * 获取公告--需要分页
 *
 * @function getNews
 * @param {Object} data - 请求参数
 * @param {number} data.count - 请求的新闻数量
 * @param {number} data.start - 请求新闻的起始位置
 * @returns {Promise<ApiResponse<{ totalCount: number; data: getNewsDataResult[] }>>} - 包含新闻列表和总数的响应结果
 */
export const getNews = (data) => post('/api/userService/getNews', data);
