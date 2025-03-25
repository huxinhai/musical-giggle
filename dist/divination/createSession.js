import { post } from "../http/http";
export const divinationCreateSession = (data) => post('/DivinationService/divination/createSession', data);
