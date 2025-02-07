import { post } from "./http/http";
/**
 * 获取折扣信息（V2版本）
 * @description 获取用户可用的折扣信息，包括首次购买优惠、分享优惠等
 * @param {userId} data - 用户ID参数
 * @returns {Promise<ApiResponse<GetDiscountInfoV2Response>>} 返回包含折扣信息的 Promise
 * @example
 * ```typescript
 * const response = await getDiscountInfoV2({ userId: 'user123' });
 * if (response.code === 200) {
 *   const { isFirst, isShare, discountInfo } = response.data;
 *   // 处理折扣信息
 * }
 * ```
 */
export const getDiscountInfoV2 = (data) => post('/userService/getDiscountInfoV2', data);
