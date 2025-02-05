import { post } from "./http/http";
export const getKBSessionList = (data) => post('/userService/getKBSessionList', data);
