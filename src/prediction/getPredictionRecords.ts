import type { ApiResponse, Pagination, userId } from "../global";
import { post } from "../http/http";


export const predictionGetPredictionRecords = async (data: Pagination & userId) =>
    post<ApiResponse<any>>('/tradeService/prediction/getPredictionRecords', data)
