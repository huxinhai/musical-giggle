import { post } from "../http/http";
export const getTicker = (data) => post('/tradeService/market/getTicker', data);
