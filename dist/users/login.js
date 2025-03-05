import { post } from "../http/http";
export const login = (data) => post('/userService/users/login', data);
