import { post } from "./http/http";
import type { ApiResponse } from "./global";

/**
 * 查询订单信息请求参数类型
 * @interface queryOrderInfoData
 * @property {string} orderid - 订单 ID
 */
export interface queryOrderInfoData {
    orderid: string
}

/**
 * 查询订单信息响应数据类型
 * @interface queryOrderInfoResponse
 */
export interface queryOrderInfoResponse {
    /** 认证信息 */
    aoidInfo: {
        /** 
         * 订单状态
         * - 'success' - 支付成功
         * - 'not_exist' - 订单不存在
         * - 'new' - 订单未支付
         * - 'payed' - 付款失败，请联系客服
         * - 'fee_error' - 付款失败，请联系客服
         * - 'expire' - 订单过期
         */
        status: 'success' | 'not_exist' | 'new' | 'payed' | 'fee_error' | 'expire';
    };
    /** 订单详细信息 */
    orderInfo: {
        /** 订单ID */
        id: number;
        /** 用户名/手机号 */
        username: string;
        /** 订单金额 */
        price: number;
        /** 订单时间 ISO格式 */
        time: string;
        /** 完成状态：0-未完成，1-已完成 */
        finished: number;
        /** 有效状态：0-无效，1-有效 */
        valid: number;
        /** 订单编号 */
        orderid: string;
    };
}

/**
 * 查询订单信息
 * @param {queryOrderInfoData} data - 查询订单信息请求参数
 * @returns {Promise<ApiResponse<queryOrderInfoResponse>>} - 查询订单信息响应数据
 */
export const queryOrderInfo = (data: queryOrderInfoData): Promise<ApiResponse<queryOrderInfoResponse>> =>
    post<ApiResponse<queryOrderInfoResponse>>('/userService/queryOrderInfo', data)