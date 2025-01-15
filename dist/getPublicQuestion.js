import { post } from "./http/http";
/**
 * 获取公共问题
 *
 * @function getPublicQuestion
 * @param {getPublicQuestionData} data - 请求参数
 * @returns {Promise<ApiResponse<getPublicQuestionResponse>>} - 包含公共问题数据的响应结果
 */
export const getPublicQuestion = (data) => post('/api/userService/getPublicQuestion', data);
