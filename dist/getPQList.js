import { post } from "./http/http";
export const getPQList = (data) => post('/userService/getPQList', data);
