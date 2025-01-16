import { post } from "./http/http";
/**
 * 获取考试服务器状态
 *
 * @function examServerStatus
 * @returns {Promise<ApiResponse<string>>} - 返回服务器状态的响应结果，通常是字符串类型的状态描述
 */
export const examServerStatus = () => post('/userService/examServerStatus');
