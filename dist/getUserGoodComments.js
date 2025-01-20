import { post } from "./http/http";
/*
*   获取用户好评
*  */
export const getUserGoodComments = (data = {}) => post('/userService/getUserGoodComments', data);
