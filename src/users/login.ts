import type { ApiResponse } from "../global"
import { post } from "../http/http"

export interface LoginResponse {
    access_token: string
    account: string
    nickname: string | null
    avatar: string | null
    createTime: string
}

export const login = (data: {
    account: string,
    pwd: string,
}) => post<ApiResponse<LoginResponse>>('/userService/users/login', data)
