import { post } from './http/http';
export const deleteUser = async (userInfo) => post('/userService/deleteUser', userInfo);
