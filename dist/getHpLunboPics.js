import { post } from "./http/http";
/**
 * 获取首页轮播图
 *
 * @function getHpLunboPics
 * @returns {Promise<ApiResponse<getHpLunboPicsResponse[]>>} - 包含轮播图信息数组的响应结果
 */
export const getHpLunboPics = () => post('/api/userService/getHpLunboPics', {});
