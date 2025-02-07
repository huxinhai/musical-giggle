import { post } from "./http/http";
export const recharge = (data) => post('/userService/recharge', data);
