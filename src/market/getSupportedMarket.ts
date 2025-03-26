import type { ApiResponse } from "../global";
import { post } from "../http/http";

export interface getSupportedMarketResponse {

    instType: string
    instName: string
    symbol: string
    info: string
    id: number
    instId: string

}
export const getSupportedMarket = (data = {}) =>
    post<ApiResponse<getSupportedMarketResponse[]>>('/tradeService/market/getSupportedMarket', data)
