import { post } from "./http/http";
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
export const getPushStatus = (data) => post('/userService/getPushStatus', data);
