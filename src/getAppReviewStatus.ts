import {post} from "./http/http";
import {ApiResponse} from "./global";


export interface AppReviewStatusResponse {
    /**
     * 审核状态
     */
    "status": string | number,
    "info": string | null,
    "terminal": string
}

/**
 * 获取APP审核状态
 *
 * @function getAppReviewStatus
 * @param {Object} data - 请求参数
 * @param {string} data.terminal - 类型
 * @returns {Promise<ApiResponse<AppReviewStatusResponse>>} - 返回服务器状态的响应结果，通常是字符串类型的状态描述
 */
export const getAppReviewStatus = (data:{terminal:string}): Promise<ApiResponse<AppReviewStatusResponse>> =>
    post<ApiResponse<AppReviewStatusResponse>>('/userService/getAppReviewStatus',data)
