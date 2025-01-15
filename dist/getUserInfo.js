import { post } from "./http/http";
export const getUserInfo = (data) => post('/api/userService/getUserInfo', data);
