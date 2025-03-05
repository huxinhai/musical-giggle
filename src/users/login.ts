import type { ApiResponse } from "../global"
import { post } from "../http/http"


export const login = (data: {
    account: string,
    pwd: string,
}) => post<ApiResponse<{
    access_token: string
}>>('/userService/users/login', data)
