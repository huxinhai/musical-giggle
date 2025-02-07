import { post } from "./http/http";
import type { ApiResponse, Pagination } from "./global";

/**
 * 用户信息接口
 * @interface UserInfo
 * @description 定义了用户的基本信息结构，包含用户的各种属性
 */
export interface UserInfo {
  /** 
   * 创建时间
   * @format ISO 8601 日期时间字符串
   */
  gmtCreate: string;
  /** 
   * 修改时间 
   * @format ISO 8601 日期时间字符串
   */
  gmtModified: string;
  /** 
   * 用户ID 
   * @description 用户的唯一标识符
   */
  userId: string;
  /** 
   * 密码
   * @description 可能为空，通常在API响应中不返回实际密码
   */
  password: string | null;
  /** 
   * 剩余次数
   * @description 用户剩余的可用次数
   */
  remain: number;
  /** 
   * 来源
   * @description 用户注册来源，可能为空
   */
  src: string | null;
  /** 
   * 附加信息
   * @description 用户的其他相关信息
   */
  info: string;
  /** 
   * 角色
   * @description 用户角色类型
   * @enum {string} 'admin' - 管理员
   * @enum {string} 'user' - 普通用户
   */
  role: 'admin' | 'user'
}

/**
 * 用户列表响应接口
 * @interface UserListResponse
 * @description 定义了获取用户列表的响应数据结构
 */
export interface UserListResponse {
  /** 
   * 总数
   * @description 符合条件的用户总数
   */
  total: number;
  /** 
   * 用户数组
   * @description 当前分页的用户列表数据
   */
  array: UserInfo[];
}

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
export const getAllUserList = (data: Pagination): Promise<ApiResponse<UserListResponse>> => 
  post<ApiResponse<UserListResponse>>('/userService/getAllUserList', data);
