import { post } from "./http/http";
import { ApiResponse, Pagination } from "./global";

    
/** 用户信息接口 */
export interface UserInfo {
  /** 创建时间 */
  gmtCreate: string;
  /** 修改时间 */
  gmtModified: string;
  /** 用户ID */
  userId: string;
  /** 密码 */
  password: string | null;
  /** 剩余次数 */
  remain: number;
  /** 来源 */
  src: string | null;
  /** 附加信息 */
  info: string;
  /** 角色 */
  role: 'admin' | 'user'
}

/** 用户列表响应接口 */
export interface UserListResponse {
  /** 总数 */
  total: number;
  /** 用户数组 */
  array: UserInfo[];
}

/**
 * 获取所有用户列表
 * @param data - 分页参数
 * @returns Promise<UserListResponse> 返回用户列表数据
 */
export const getAllUserList = (data: Pagination): Promise<ApiResponse<UserListResponse>> => 
  post<ApiResponse<UserListResponse>>('/userService/getAllUserList', data);
