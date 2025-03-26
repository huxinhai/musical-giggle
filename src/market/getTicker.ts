import type { ApiResponse } from "../global";
import { post } from "../http/http";


export const getTicker = (data: {
    instId: string
}) =>
    post<ApiResponse<Record<string, string>>>('/tradeService/market/getTicker', data)
