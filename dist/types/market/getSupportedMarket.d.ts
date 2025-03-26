import type { ApiResponse } from "../global";
export interface getSupportedMarketResponse {
    instType: string;
    instName: string;
    symbol: string;
    info: string;
    id: number;
    instId: string;
}
export declare const getSupportedMarket: (data?: {}) => Promise<ApiResponse<getSupportedMarketResponse[]>>;
//# sourceMappingURL=getSupportedMarket.d.ts.map