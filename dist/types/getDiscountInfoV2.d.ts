import { ApiResponse, userId } from "./global";
export interface GetDiscountInfoV2Response {
    isFirst: boolean;
    isShare: boolean;
    discountInfo: DiscountInfo[];
}
export interface Equity {
    id: string;
    name: string;
    desc: string;
    shareDesc?: string;
    firstDesc?: string;
    firstShareDesc?: string;
    status: 'valid' | 'invalid';
    description: string | null;
}
export interface DiscountInfo {
    id: number;
    gmtCreate: string;
    gmtModified: string;
    packageId: string;
    packageType: string;
    name: string;
    description: string;
    oriDuration: number;
    firstOriDuration: number;
    extraDuration: number;
    firstExtraDuration: number;
    discountRatio: number;
    firstDiscountRatio: number;
    shareRatio: number;
    equities: Equity[];
    info: null;
    finalOriDuration: number;
    finalExtraDuration: number;
    finalDiscountRatio: number;
}
export declare const getDiscountInfoV2: (data: userId) => Promise<ApiResponse<GetDiscountInfoV2Response>>;
//# sourceMappingURL=getDiscountInfoV2.d.ts.map