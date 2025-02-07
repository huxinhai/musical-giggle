import {post} from "./http/http";
import type {ApiResponse} from "./global";

/**
 * 登录信息请求参数类型
 * @interface sendLoginInfoData
 * @property {string} userId - 用户 ID
 * @property {Object} loginInfo - 登录信息对象
 * @property {string} loginInfo.candidateType - 候选人类型
 * @property {string} loginInfo.source - 登录来源
 * @property {string} loginInfo.workingYear - 工作年限
 * @property {string} loginInfo.grade - 学历年级
 * @property {string} loginInfo.school - 学校名称
 */
export interface sendLoginInfoData {
    userId: string
    // loginInfo: {
    //     candidateType: string
    //     source: string
    //     workingYear: string
    //     grade: string
    //     school: string
    // }
    loginInfo: object
}

/**
 * 发送登录信息
 *
 * @function sendLoginInfo
 * @param {sendLoginInfoData} data - 包含用户登录信息的请求数据
 * @returns {Promise<ApiResponse<true>>} - 返回请求结果，成功时为 `true`
 */
export const sendLoginInfo = (data: sendLoginInfoData): Promise<ApiResponse<true>> =>
    post<ApiResponse<true>>('/api/userService/updateLogin', data)

