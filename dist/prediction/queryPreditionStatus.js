import { post } from "../http/http";
export const predictionQueryPreditionStatus = async (data) => post('/tradeService/prediction/queryPreditionStatus', data);
