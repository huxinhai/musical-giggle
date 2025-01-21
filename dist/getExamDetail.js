import { post } from "./http/http";
/**
 * 获取考试详情
 * @param {ExamDetailParams} params - 请求参数，包含考试ID和分页信息
 * @returns {Promise<ApiResponse<ExamDetailResponse>>} 返回考试详情数据
 */
export const getExamDetail = (params) => post('/userService/getExamDetail', params);
