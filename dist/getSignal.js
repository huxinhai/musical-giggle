import { post } from "./http/http";
/**
 * 获取信号列表
 * @async
 * @function getSignal
 * @param {getSignalResponsePage | getSignalResponse} data - 请求参数
 * @returns {Promise<ApiResponse<GetSignalResponse>>} 返回信号列表数据
 *
 * @example
 * const response = await getSignal({
 *   page: 1,
 *   pageSize: 10
 * });
 * console.log(`总信号数: ${response.data.totalCount}`);
 * console.log(`第一个信号价格: ${response.data.array[0].metricInfo.price}`);
 */
export const getSignal = (data) => post('/dataService/getSignal', data);
