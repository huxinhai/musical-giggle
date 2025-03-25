import { post } from "../http/http";
export const divinationGetDivinationResult = (data) => post('/DivinationService/divination/getDivinationResult', data);
