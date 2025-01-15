import { post } from "./http/http";
/**
 * 获取用户信息
 * @param data - 包含电话号码的对象
 * @param data.phone - 用户的电话号码
 * @returns
 */
export const getUserInfo = (data) => post('/api/userService/getUserInfo', data);
