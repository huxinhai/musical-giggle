import {ApiResponse} from "./global";
import {post} from "./http/http";


export interface authenticateResponse {
    remain: number
    username: string
    role: string
    src: string
    abConfig: {
        mjExp: number
    }
    token: string
}

export const authenticate = (data: {
    code: string | number
    phone: string | number
    src: 'default'
    pathParam: ''
    utdid?: string
}) =>
    post<ApiResponse<authenticateResponse>>('/api/userService/authenticate', data)
