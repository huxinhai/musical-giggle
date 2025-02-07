import { post } from "./http/http";
/**
 * 获取用户支付头像信息
 * @description 获取用户支付场景下使用的头像信息
 * @param {object} data - 空对象参数
 * @returns {Promise<ApiResponse<GetUserPayAvatarInfoResponse[]>>} 返回包含头像信息的 Promise
 * @example
 * ```typescript
 * const response = await getUserPayAvatarInfo();
 * if (response.code === 200) {
 *   const { avtarUrl, desc } = response.data;
 *   // 处理头像信息
 * }
 * ```
 */
export const getUserPayAvatarInfo = (data = {}) => post('/userService/getUserPayAvatarInfo', data);
