import type { ApiResponse } from "../global";
export interface getSubscribeResponse {
    id: number;
    strategyArray: any[];
    signalTo: number;
}
export declare const getSubscribe: () => Promise<ApiResponse<getSubscribeResponse>>;
//# sourceMappingURL=getSubscribe.d.ts.map