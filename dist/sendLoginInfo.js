import { post } from "./http/http";
/**
 * 发送登录信息
 *
 * @function sendLoginInfo
 * @param {sendLoginInfoData} data - 包含用户登录信息的请求数据
 * @returns {Promise<ApiResponse<true>>} - 返回请求结果，成功时为 `true`
 */
export const sendLoginInfo = (data) => post('/api/userService/updateLogin', data);
