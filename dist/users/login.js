import { post } from "../http/http";
export const login = (data) => post('/userService/h/users/login', data);
