import type { ApiResponse } from "../global";
import { get } from "../http/http";


export interface getSubscribeResponse {
    id: number;
    strategyArray: any[];
    signalTo: number;
}
export const getSubscribe = () =>
    get<ApiResponse<getSubscribeResponse>>('/userService/signals/getSubscribe')
