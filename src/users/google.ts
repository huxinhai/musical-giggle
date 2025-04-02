import type { ApiResponse } from "../global"
import { post } from "../http/http"


export const getGoogleUserInfo = async (code: string) => post<ApiResponse<{
    access_token: string
}>>('/userService/users/google', {
    code
})
