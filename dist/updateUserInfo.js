import { post } from './http/http';
export const updateUserInfo = async (userInfo) => post('/userService/updateUserInfo', userInfo);
