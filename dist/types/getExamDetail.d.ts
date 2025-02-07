import type { ApiResponse, Pagination } from "./global";
/**
 * 考试详情项接口
 * @interface ExamDetailItem
 */
export interface ExamDetailItem {
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
    /** 问题ID */
    questionId: string;
    /** 状态 */
    status: 'finished' | 'pending';
    /** 问题内容 */
    question: string;
    /** 答案内容 */
    answer: string;
    /** 图片URL */
    imageUrl: string | null;
    /** 消息 */
    message: string | null;
    /** 附加信息 JSON字符串 */
    info: string;
}
/**
 * 考试详情响应接口
 * @interface ExamDetailResponse
 */
export interface ExamDetailResponse {
    /** 总记录数 */
    total: number;
    /** 详情列表 */
    array: ExamDetailItem[];
}
/**
 * 考试详情请求参数接口
 * @interface ExamDetailParams
 */
export interface ExamDetailParams extends Pagination {
    /** 考试ID */
    examId: string;
}
/**
 * 获取考试详情
 * @param {ExamDetailParams} params - 请求参数，包含考试ID和分页信息
 * @returns {Promise<ApiResponse<ExamDetailResponse>>} 返回考试详情数据
 */
export declare const getExamDetail: (params: ExamDetailParams) => Promise<ApiResponse<ExamDetailResponse>>;
//# sourceMappingURL=getExamDetail.d.ts.map