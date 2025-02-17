import { post } from "./http/http";
/**
 * 获取用户分发信息（V1版本）
 * @param {userId} data - 用户ID参数
 * @returns {Promise<ApiResponse<string>>} 返回包含分发信息的Promise对象
 */
export const getDistributeInfoV1 = (data) => post('/userService/getDistributeInfoV1', data);
