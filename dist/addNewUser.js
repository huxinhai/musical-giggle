import { post } from './http/http';
/**
 * 添加新用户
 * @param {UserData} data - 用户注册信息
 * @returns {Promise<ApiResponse<UserResponse | null>>} 返回用户注册结果
 */
export const addNewUser = (data) => post('/userService/addNewUser', data);
