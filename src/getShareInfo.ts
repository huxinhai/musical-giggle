import {ApiResponse} from "./global";
import {post} from "./http/http";

/**
 * 用户信息响应类型
 * @interface getUserInfoResponse
 * @property {number} availableGmv - 总奖励
 * @property {number} inviteGmv - 总充值金额
 * @property {number} invitePayCnt - 总支付次数
 * @property {number} inviteRegisterCnt - 总邀请人数
 * @property {number | string} userId - 用户 ID，可以是数字或字符串
 */
export interface getUserInfoResponse {
    availableGmv: number
    inviteGmv: number
    invitePayCnt: number
    inviteRegisterCnt: number
    userId: number | string
}

/**
 * 获取获取裂变信息
 *
 * @function getShareInfo
 * @param {Object} data - 请求参数
 * @param {string} data.phone - 用户手机号
 * @returns {Promise<ApiResponse<getUserInfoResponse>>} - 包含用户信息的响应结果
 */
export const getShareInfo = (data: { phone: string }): Promise<ApiResponse<getUserInfoResponse>> =>
    post<ApiResponse<getUserInfoResponse>>('/api/userService/getShareInfo', data)
