import { post } from "../http/http";
export const divinationCreateDivination = (data) => post('/divinationService/divination/createDivination', data);
