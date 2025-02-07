import { ApiResponse, userId } from "./global";
import { post } from "./http/http";

export interface GetDiscountInfoV2Response {
    isFirst: boolean
    isShare: boolean
    discountInfo: DiscountInfo[]
}
export interface Equity {
    id: string
    name: string
    desc: string
    shareDesc?: string
    firstDesc?: string
    firstShareDesc?: string
    status: 'valid' | 'invalid'
    description: string | null
}

export interface DiscountInfo {
    id: number
    gmtCreate: string
    gmtModified: string
    packageId: string
    packageType: string
    name: string
    description: string
    oriDuration: number
    firstOriDuration: number
    extraDuration: number
    firstExtraDuration: number
    discountRatio: number
    firstDiscountRatio: number
    shareRatio: number
    equities: Equity[]
    info: null
    finalOriDuration: number
    finalExtraDuration: number
    finalDiscountRatio: number
}
export const getDiscountInfoV2 = (data: userId) =>
    post<ApiResponse<GetDiscountInfoV2Response>>('/userService/getDiscountInfoV2', data)
