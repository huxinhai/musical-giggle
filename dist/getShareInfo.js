import { post } from "./http/http";
/**
 * 获取获取裂变信息
 *
 * @function getShareInfo
 * @param {Object} data - 请求参数
 * @param {string} data.phone - 用户手机号
 * @returns {Promise<ApiResponse<getUserInfoResponse>>} - 包含用户信息的响应结果
 */
export const getShareInfo = (data) => post('/api/userService/getShareInfo', data);
