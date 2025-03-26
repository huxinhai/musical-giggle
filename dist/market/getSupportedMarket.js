import { post } from "../http/http";
export const getSupportedMarket = (data = {}) => post('/tradeService/market/getSupportedMarket', data);
