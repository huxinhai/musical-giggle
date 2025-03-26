import { post } from "../http/http";
export const predictionCreatePrediction = async (data) => post('/tradeService/prediction/createPrediction', data);
