import { ApiResponse, userId } from "./global"
import { post } from "./http/http"

/**
 * 设置页面访问记录
 * @description 设置页面访问记录
 * @param {object} data - 包含 spm 和 userId 的对象
 * @returns {Promise<ApiResponse<string>>} 返回包含页面访问记录的 Promise
 * @example
 */
export const setPageViewRecord = (data: { spm: string } & userId): Promise<ApiResponse<string>> =>
    post<ApiResponse<string>>('/userService/setPageViewRecord', data)