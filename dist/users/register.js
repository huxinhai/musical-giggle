import { post } from "../http/http";
/**
 * 注册用户
 * @param data 注册数据
 * @returns 注册结果
 */
export const register = (data) => post('/users/register', data);
