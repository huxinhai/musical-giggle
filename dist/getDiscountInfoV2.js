import { post } from "./http/http";
export const getDiscountInfoV2 = (data) => post('/userService/getDiscountInfoV2', data);
