import { post } from "./http/http";
/**
 * 获取用户信息
 * @param data - 包含电话号码的对象
 * @param isApi - 是否使用 API
 * @param data.phone - 用户的电话号码
 * @returns
 */
export const getUserInfo = (data, isApi = !0) => post(`${isApi ? '/api' : ''}/userService/getUserInfo`, data);
