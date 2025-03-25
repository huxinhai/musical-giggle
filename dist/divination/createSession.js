import { post } from "../http/http";
export const divinationCreateSession = (data) => post('/divinationService/divination/createSession', data);
