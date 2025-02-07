import { ApiResponse } from "./global";
import { post } from "./http/http";


export interface GetUserPayAvatarInfoResponse {
    avtarUrl: string
    desc: string
}

export const getUserPayAvatarInfo = (data = {}) => post<ApiResponse<GetUserPayAvatarInfoResponse>>('/userService/getUserPayAvatarInfo', data)