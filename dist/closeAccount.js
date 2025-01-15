import { post } from "./http/http";
/**
 * 关闭用户账户请求参数类型
 *
 * @function activate
 * @param {Object} data - 请求参数
 * @param {string} data.userId - 用户 ID，可以是数字或字符串
 * @returns {Promise<ApiResponse<true>>} - 返回激活请求的响应结果
 */
export const closeAccount = (data) => post('/api/userService/closeAccount', data);
