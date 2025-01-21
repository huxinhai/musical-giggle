import type { ApiResponse, Pagination } from "./global";
/**
 * 考试记录项的接口定义
 * @interface ExamListItem
 */
export interface ExamListItem {
    /** 记录ID */
    id: number;
    /** 创建时间 */
    gmtCreate: string;
    /** 修改时间 */
    gmtModified: string;
    /** 用户ID */
    userId: string;
    /** 考试ID */
    examId: string;
    /** 考试信息 JSON字符串 */
    message: string;
    /** 题目总数 */
    questionCount: number;
    /** 已答题数 */
    answerCount: number;
    /** 错题数量 */
    wrongCount: number;
}
/**
 * 考试列表响应接口
 * @interface ExamListResponse
 */
export interface ExamListResponse {
    /** 总记录数 */
    total: number;
    /** 考试记录列表 */
    list: ExamListItem[];
}
/**
 * 获取考试列表
 * @param {Pagination} params - 分页参数
 * @returns {Promise<ApiResponse<ExamListResponse>>} 返回考试列表数据
 */
export declare const getExamList: (params: Pagination) => Promise<ApiResponse<ExamListResponse>>;
//# sourceMappingURL=getExamList.d.ts.map