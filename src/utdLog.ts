import { post } from "./http/http";
import type { ApiResponse } from "./global";



/**
 * 上传用户行为日志
 *
 * @function utdLog
 * @param {object} data - 用户行为日志数据，将被序列化为 JSON 字符串
 * @returns {Promise<ApiResponse<any>>} - 日志上传的响应结果
 */
export const utdLog = (data: object): Promise<ApiResponse<any>> =>
    post<ApiResponse<any>>('/api/userService/utdLog', {
        utdlog: JSON.stringify(data)
    })
