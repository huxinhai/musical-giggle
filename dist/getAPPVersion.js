import { post } from "./http/http";
/**
 * 获得最新版本
 *
 * @function getAPPVersion
 * @param {getAPPVerData} data - 请求参数，包含终端类型
 * @returns {Promise<ApiResponse<string>>} - 返回包含应用版本信息的响应结果
 */
export const getAPPVersion = (data) => post('/api/userService/getAPPVersion', data);
