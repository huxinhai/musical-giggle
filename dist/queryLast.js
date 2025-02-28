import { post } from "./http/http";
export const queryLast = (data) => post('/userService/queryLast', data);
