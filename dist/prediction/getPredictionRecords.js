import { post } from "../http/http";
export const predictionGetPredictionRecords = async (data) => post('/tradeService/prediction/getPredictionRecords', data);
