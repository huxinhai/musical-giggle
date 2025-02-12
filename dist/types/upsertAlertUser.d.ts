import type { ApiResponse } from "./global";
/**
 * 告警用户信息
 * @interface UpsertAlertUserResponse
 * @property {string} gmtCreate - 创建时间（ISO 8601格式）
 * @property {string} gmtModified - 修改时间（ISO 8601格式）
 * @property {string} userId - 用户ID（通常是邮箱地址）
 * @property {string} alertType - 告警类型（如：email）
 * @property {number} status - 告警状态（1: 启用, 0: 禁用）
 * @property {string | null} info - 附加信息
 *
 * @example
 * const alertUser: UpsertAlertUserResponse = {
 *   gmtCreate: "2025-02-12T08:24:09.000+00:00",
 *   gmtModified: "2025-02-12T08:24:09.000+00:00",
 *   userId: "302566290@qq.com",
 *   alertType: "email",
 *   status: 1,
 *   info: null
 * }
 */
export interface UpsertAlertUserResponse {
    gmtCreate: string;
    gmtModified: string;
    userId: string;
    alertType: string;
    status: number;
    info: string | null;
}
/**
 * 更新告警用户的请求参数
 * @interface UpsertAlertUserRequest
 * @property {string} userId - 用户ID（通常是邮箱地址）
 * @property {string} type - 告警类型
 * @property {number} status - 告警状态（1: 启用, 0: 禁用）
 */
export interface UpsertAlertUserRequest {
    userId: string;
    type: string;
    status: number;
}
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
export declare const upsertAlertUser: (data: UpsertAlertUserRequest) => Promise<ApiResponse<UpsertAlertUserResponse>>;
//# sourceMappingURL=upsertAlertUser.d.ts.map