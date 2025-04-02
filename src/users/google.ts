import type { ApiResponse } from "../global"
import { post } from "../http/http"
import type { LoginResponse } from "./login"


export const getGoogleUserInfo = async (code: string) => post<ApiResponse<LoginResponse>>('/userService/users/google', {
    code
})
