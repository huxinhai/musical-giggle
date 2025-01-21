import { ApiResponse } from './global';
/**
 * 用户注册请求参数接口
 * @interface UserData
 */
interface UserData {
    /** 用户手机号 */
    phone: string;
    /** 用户密码 */
    password: string;
}
/**
 * 用户注册响应数据接口
 * @interface UserResponse
 */
interface UserResponse {
    /** 创建时间 */
    gmtCreate: string;
    /** 修改时间 */
    gmtModified: string;
    /** 用户ID */
    userId: string;
    /** 用户密码 */
    password: string;
    /** 剩余次数 */
    remain: number;
    /** 来源 */
    src: null;
    /** 用户信息（JSON字符串） */
    info: string;
}
/**
 * 添加新用户
 * @param {UserData} data - 用户注册信息
 * @returns {Promise<ApiResponse<UserResponse | null>>} 返回用户注册结果
 */
export declare const addNewUser: (data: UserData) => Promise<ApiResponse<UserResponse | null>>;
export {};
//# sourceMappingURL=addNewUser.d.ts.map