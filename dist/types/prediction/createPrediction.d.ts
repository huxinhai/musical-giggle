import type { ApiResponse } from "../global";
export interface predictionCreatePredictionData {
    userId: string;
    sessionId: string;
    divinationId: string;
    txId: string;
    fromAddress: string;
    toAddress: string;
    chain: string;
    instId: string;
    direction: string;
    amount: string;
    period: string;
}
export declare const predictionCreatePrediction: (data: predictionCreatePredictionData) => Promise<ApiResponse<any>>;
//# sourceMappingURL=createPrediction.d.ts.map