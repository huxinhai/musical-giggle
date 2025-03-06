import { post } from "../http/http";
export const subscribe = (data) => post('/userService/subscribe', data);
