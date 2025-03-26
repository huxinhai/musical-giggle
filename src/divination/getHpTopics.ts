import type { ApiResponse } from "../global";
import { post } from "../http/http";


export interface getHpTopicsResponse {
    id: number
    title: string
    description: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    info: string
    rankId: number
}
export const getHpTopics = (data = {}) => post<ApiResponse<getHpTopicsResponse[]>>('/tradeService/market/getHpTopics', data)
