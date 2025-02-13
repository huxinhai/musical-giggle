import { post } from "./http/http";
/**
 * 更新告警用户信息
 * @async
 * @function upsertAlertUser
 * @param {UpsertAlertUserRequest} data - 更新告警用户的请求参数
 * @returns {Promise<ApiResponse<UpsertAlertUserResponse>>} 返回更新后的告警用户信息
 *
 * @example
 * const response = await upsertAlertUser({
 *   userId: "302566290@qq.com",
 *   type: "email",
 *   status: 1
 * });
 * console.log(`更新时间: ${response.data.gmtModified}`);
 */
export const upsertAlertUser = (data) => post('/userService/upsertAlertUser', data);
