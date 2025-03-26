import { post } from "../http/http";
export const getHpTopics = (data = {}) => post('/tradeService/market/getHpTopics', data);
