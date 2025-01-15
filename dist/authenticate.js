import { post } from "./http/http";
export const authenticate = (data) => post('/api/userService/authenticate', data);
