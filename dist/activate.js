import { post } from "./http/http";
/**
 * APP激活
 *
 * @function activate
 * @param {Object} data - 请求参数
 * @param {string} data.utdid - 用户的唯一标识 ID
 * @returns {Promise<ApiResponse<any>>} - 返回激活请求的响应结果
 */
export const activate = (data) => post('/api/userService/activate', data);
