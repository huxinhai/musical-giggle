import { post } from "./http/http";
/**
 * 获取所有注册来源
 *
 * @function getLoginInfo
 * @returns {Promise<ApiResponse<getLoginInfoItem[]>>} - 返回包含注册来源项的响应结果
 */
export const getLoginInfo = () => post('/api/userService/getLoginInfo', {});
