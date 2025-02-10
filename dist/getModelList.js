import { post } from "./http/http";
/**
 * 获取模型列表
 * @description 获取所有可用的AI模型列表
 * @returns {Promise<ApiResponse<getModelListResponse[]>>} 返回包含模型列表的Promise
 * @example
 * ```typescript
 * const response = await getModelList();
 * if (response.code === 200) {
 *   const models = response.data;
 *   // 处理模型列表数据
 * }
 * ```
 */
export const getModelList = (data = {}) => post('/userService/getModelList', data);
