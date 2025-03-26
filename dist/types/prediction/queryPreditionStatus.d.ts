import type { ApiResponse } from "../global";
export interface predictionQueryPreditionStatusData {
    userId: string;
    predictionId: string;
}
export declare const predictionQueryPreditionStatus: (data: predictionQueryPreditionStatusData) => Promise<ApiResponse<any>>;
//# sourceMappingURL=queryPreditionStatus.d.ts.map