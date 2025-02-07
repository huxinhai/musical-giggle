import { post } from "./http/http";
/**
 * 获取所有用户列表
 * @description 通过分页参数获取用户列表数据
 * @param {Pagination} data - 分页参数对象
 * @param {number} data.pageSize - 每页显示的记录数
 * @param {number} data.current - 当前页码
 * @returns {Promise<ApiResponse<UserListResponse>>} 返回包含用户列表数据的 Promise
 * @example
 * ```typescript
 * const response = await getAllUserList({ pageSize: 10, current: 1 });
 * if (response.code === 200) {
 *   const { total, array } = response.data;
 *   // 处理用户列表数据
 * }
 * ```
 */
export const getAllUserList = (data) => post('/userService/getAllUserList', data);
