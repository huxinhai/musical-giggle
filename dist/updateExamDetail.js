import { post } from "./http/http";
/**
 * 更新考试详情
 * @param data - 更新参数
 * @returns Promise<ApiResponse<boolean>> - 返回更新操作的结果
 */
export const updateExamDetail = (data) => post('/userService/updateExamDetail', data);
