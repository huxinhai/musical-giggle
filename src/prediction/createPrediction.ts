import type { ApiResponse } from "../global";
import { post } from "../http/http";


export interface predictionCreatePredictionData {
    userId: string,
    sessionId: string,
    divinationId: string,
    txId: string,
    fromAddress: string,
    toAddress: string,
    chain: string,
    instId: string,
    direction: string,
    amount: string,
    period: string
  }

export const predictionCreatePrediction = async (data: predictionCreatePredictionData) => 
    post<ApiResponse<any>>('/tradeService/prediction/createPrediction', data)
