import { ApiResponse, userId } from "./global";
import { post } from "./http/http";

/**
 * 折扣信息响应接口
 * @interface GetDiscountInfoV2Response
 * @description 定义了获取折扣信息的响应数据结构
 */
export interface GetDiscountInfoV2Response {
    /** 
     * 是否首次购买
     * @description 用户是否为首次购买
     */
    isFirst: boolean
    /** 
     * 是否已分享
     * @description 用户是否已完成分享操作
     */
    isShare: boolean
    /** 
     * 折扣信息列表
     * @description 包含所有可用的折扣套餐信息
     */
    discountInfo: DiscountInfo[]
}

/**
 * 权益信息接口
 * @interface Equity
 * @description 定义了套餐包含的权益信息
 */
export interface Equity {
    /** 
     * 权益ID
     * @description 权益的唯一标识符
     */
    id: string
    /** 
     * 权益名称
     * @description 权益的显示名称
     */
    name: string
    /** 
     * 权益描述
     * @description 权益的基本描述信息
     */
    desc: string
    /** 
     * 分享后描述
     * @description 完成分享后显示的描述信息
     */
    shareDesc?: string
    /** 
     * 首次购买描述
     * @description 首次购买时显示的描述信息
     */
    firstDesc?: string
    /** 
     * 首次购买且分享后描述
     * @description 首次购买并完成分享后显示的描述信息
     */
    firstShareDesc?: string
    /** 
     * 权益状态
     * @description 权益的当前状态
     * @enum {string} 'valid' - 有效的
     * @enum {string} 'invalid' - 无效的
     */
    status: 'valid' | 'invalid'
    /** 
     * 详细描述
     * @description 权益的详细说明，可能为空
     */
    description: string | null
}

/**
 * 折扣信息接口
 * @interface DiscountInfo
 * @description 定义了具体的折扣套餐信息
 */
export interface DiscountInfo {
    /** 折扣ID */
    id: number
    /** 
     * 创建时间
     * @format ISO 8601 日期时间字符串
     */
    gmtCreate: string
    /** 
     * 修改时间
     * @format ISO 8601 日期时间字符串
     */
    gmtModified: string
    /** 套餐ID */
    packageId: string
    /** 套餐类型 */
    packageType: string
    /** 套餐名称 */
    name: string
    /** 套餐描述 */
    description: string
    /** 
     * 原始时长
     * @description 套餐基础时长（天）
     */
    oriDuration: number
    /** 
     * 首次购买原始时长
     * @description 首次购买时的基础时长（天）
     */
    firstOriDuration: number
    /** 
     * 额外赠送时长
     * @description 额外赠送的时长（天）
     */
    extraDuration: number
    /** 
     * 首次购买额外赠送时长
     * @description 首次购买时额外赠送的时长（天）
     */
    firstExtraDuration: number
    /** 
     * 折扣比例
     * @description 普通折扣比例，例如 0.8 表示 8 折
     */
    discountRatio: number
    /** 
     * 首次购买折扣比例
     * @description 首次购买时的折扣比例
     */
    firstDiscountRatio: number
    /** 
     * 分享折扣比例
     * @description 完成分享后的折扣比例
     */
    shareRatio: number
    /** 
     * 权益列表
     * @description 该套餐包含的所有权益
     */
    equities: Equity[]
    /** 附加信息 */
    info: null
    /** 
     * 最终原始时长
     * @description 计算各种条件后的最终基础时长
     */
    finalOriDuration: number
    /** 
     * 最终额外时长
     * @description 计算各种条件后的最终额外赠送时长
     */
    finalExtraDuration: number
    /** 
     * 最终折扣比例
     * @description 计算各种条件后的最终折扣比例
     */
    finalDiscountRatio: number
}

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
export const getDiscountInfoV2 = (data: userId): Promise<ApiResponse<GetDiscountInfoV2Response>> =>
    post<ApiResponse<GetDiscountInfoV2Response>>('/userService/getDiscountInfoV2', data)
