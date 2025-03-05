import type { ApiResponse } from "../global"
import { post } from "../http/http"

/**
 * 发送验证码
 * @param data 发送验证码数据
 * @returns 发送验证码结果
 */
export const sendVerificationCode = (data: {
    account: string
    type:number
}) => post<ApiResponse<boolean>>('/users/sendVerificationCode', data)
