import { ApiResponse } from "./global";
import { post } from "./http/http";

/**
 * 用户支付头像信息响应接口
 * @interface GetUserPayAvatarInfoResponse
 * @description 定义了获取用户支付相关头像信息的响应数据结构
 */
export interface GetUserPayAvatarInfoResponse {
    /** 
     * 头像URL
     * @description 用户支付相关的头像图片地址
     */
    avtarUrl: string
    /** 
     * 描述信息
     * @description 头像相关的描述文本
     */
    desc: string
}

/**
 * 获取用户支付头像信息
 * @description 获取用户支付场景下使用的头像信息
 * @param {object} data - 空对象参数
 * @returns {Promise<ApiResponse<GetUserPayAvatarInfoResponse[]>>} 返回包含头像信息的 Promise
 * @example
 * ```typescript
 * const response = await getUserPayAvatarInfo();
 * if (response.code === 200) {
 *   const { avtarUrl, desc } = response.data;
 *   // 处理头像信息
 * }
 * ```
 */
export const getUserPayAvatarInfo = (data: object = {}): Promise<ApiResponse<GetUserPayAvatarInfoResponse[]>> => 
    post<ApiResponse<GetUserPayAvatarInfoResponse[]>>('/userService/getUserPayAvatarInfo', data)