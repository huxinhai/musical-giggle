import type { ApiResponse } from "./global";
import { post } from "./http/http";

/**
 * 发送告警邮件
 * @returns 
 */
export const alertUsers = (data: { "tokenIds": string }): Promise<ApiResponse<boolean>> =>
    post<ApiResponse<boolean>>('/dataService/alertUsers', data)
