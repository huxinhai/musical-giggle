import type { ApiResponse, userId } from "./global";
/**
 * 推送状态响应接口
 */
export interface PushStatusResponse {
    /** 推送ID标识 */
    pushId: string;
    /** 是否激活 */
    active: string;
    /** 用户ID */
    userId: string;
    /** 附加信息 */
    info: null | any;
}
/**
 * 获取推送状态
 * @param {Object} data - 请求参数
 * @param {string} data.pushId - 推送ID标识
 * @param {string} data.userId - 用户ID
 * @returns {Promise<PushStatusResponse>} 返回推送状态信息
 *
 * @example
 * const result = await getPushStatus({
 *   pushId: 'homePayPush',
 *   userId: '13262623001'
 * });
 * console.log(result.active); // 'true'
 */
export declare const getPushStatus: (data: userId & {
    pushId: string;
}) => Promise<ApiResponse<PushStatusResponse>>;
//# sourceMappingURL=getPushStatus.d.ts.map