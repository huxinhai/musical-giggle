import type { ApiResponse } from "../global";
import { post } from "../http/http";


export const subscribe = (data: {strategyArray: any[]}) =>
    post<ApiResponse<string>>('/userService/signals/subscribe', data)
