import { post } from "./http/http";
export const getUserPayAvatarInfo = (data = {}) => post('/userService/getUserPayAvatarInfo', data);
