import { post } from "../http/http";
export const getHpTopics = (data = {}) => post('/divinationService/market/getHpTopics', data);
