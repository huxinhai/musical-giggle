import {ApiResponse} from "./global";
import {post} from "./http/http";

/**
 * 获取应用版本请求参数类型
 * @interface getAPPVerData
 * @property {'desktop' | 'web' | 'mobileApp'} terminal - 终端类型，可选值为 'desktop'、'web' 或 'mobileApp' 对于app来说，如果版本号以.f结尾，那么就是需要强制更新的
 */
export interface getAPPVerData {
    terminal: 'desktop' | 'web' | 'mobileApp'
}

/**
 * 获得最新版本
 *
 * @function getAPPVersion
 * @param {getAPPVerData} data - 请求参数，包含终端类型
 * @returns {Promise<ApiResponse<string>>} - 返回包含应用版本信息的响应结果
 */
export const getAPPVersion = (data: getAPPVerData): Promise<ApiResponse<string>> =>
    post<ApiResponse<string>>('/api/userService/getAPPVersion', data)

