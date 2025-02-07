import { post } from "./http/http";
/**
 * 查询订单信息
 * @param {queryOrderInfoData} data - 查询订单信息请求参数
 * @returns {Promise<ApiResponse<queryOrderInfoResponse>>} - 查询订单信息响应数据
 */
export const queryOrderInfo = (data) => post('/userService/queryOrderInfo', data);
