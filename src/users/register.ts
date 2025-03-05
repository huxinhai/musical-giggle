import { post } from "../http/http"
import type { ApiResponse } from "../global"
/**
 * 注册用户
 * @param data 注册数据
 * @returns 注册结果
 */
export const register = (data: {
    account: string,
    pwd: string,
    code: string,
    invitationCode?: string
}) => post<ApiResponse<boolean>>('/userService/h/users/register', data)
