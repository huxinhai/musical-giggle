import { post } from "./http/http";
/**
 * 获取考试列表
 * @param {Pagination} params - 分页参数
 * @returns {Promise<ApiResponse<ExamListResponse>>} 返回考试列表数据
 */
export const getExamList = (params) => {
    return post('/userService/getExamList', params);
};
