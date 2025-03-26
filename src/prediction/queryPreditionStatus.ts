import type { ApiResponse } from "../global";
import { post } from "../http/http";

export interface predictionQueryPreditionStatusData {
    userId: string,
    predictionId: string
}

export const predictionQueryPreditionStatus = async (data: predictionQueryPreditionStatusData) =>
    post<ApiResponse<any>>('/tradeService/prediction/queryPreditionStatus', data)
