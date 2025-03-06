import { post } from "../http/http";
export const subscribe = (data) => post('/userService/signals/subscribe', data);
