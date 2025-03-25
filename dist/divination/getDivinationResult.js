import { post } from "../http/http";
export const divinationGetDivinationResult = (data) => post('/divinationService/divination/getDivinationResult', data);
