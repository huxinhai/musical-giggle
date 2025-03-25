import { post } from "../http/http";
export const divinationCreateDivination = (data) => post('/DivinationService/divination/createDivination', data);
