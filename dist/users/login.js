import { post } from "../http/http";
export const login = (data) => post('/users/login', data);
