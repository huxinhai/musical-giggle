import { post } from "./http/http";
import type { ApiResponse } from "./global";

/**
 * APP激活
 *
 * @function activate
 * @param {Object} data - 请求参数
 * @param {string} data.utdid - 用户的唯一标识 ID
 * @returns {Promise<ApiResponse<any>>} - 返回激活请求的响应结果
 */
export const activate = (data: { utdid: string }): Promise<ApiResponse<any>> =>
    post<ApiResponse<any>>('/api/userService/activate', data)

