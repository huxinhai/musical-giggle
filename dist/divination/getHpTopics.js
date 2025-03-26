import { post } from "../http/http";
export const getHpTopics = (data = {}) => post('/divinationService/divination/getHpTopics', data);
