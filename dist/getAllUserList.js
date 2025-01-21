import { post } from "./http/http";
/**
 * 获取所有用户列表
 * @param data - 分页参数
 * @returns Promise<UserListResponse> 返回用户列表数据
 */
export const getAllUserList = (data) => post('/userService/getAllUserList', data);
