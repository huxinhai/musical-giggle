import { post } from "./http/http";
/**
 * 获取首页轮播图
 *
 * @function getHpLunboPics
 * @param data.type - 不传或传appHp-首页轮播图 appLogin-登录页轮播图
 * @returns {Promise<ApiResponse<getHpLunboPicsResponse[]>>} - 包含轮播图信息数组的响应结果
 */
export const getHpLunboPics = (data) => post('/api/userService/getHpLunboPics', data || {});
