import { post } from "./http/http";
/**
 * 获取APP审核状态
 *
 * @function getAppReviewStatus
 * @param {Object} data - 请求参数
 * @param {string} data.terminal - 类型
 * @returns {Promise<ApiResponse<AppReviewStatusResponse>>} - 返回服务器状态的响应结果，通常是字符串类型的状态描述
 */
export const getAppReviewStatus = (data) => post('/userService/getAppReviewStatus', data);
