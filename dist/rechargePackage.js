import { post } from "./http/http";
export const rechargePackage = (data) => post('/userService/rechargePackage', data);
