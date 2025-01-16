import { ApiResponse, userId } from "./global";
/**
 * 考试记录类型
 * @interface ExamRecord
 * @property {string} gmtCreate - 创建时间，ISO 8601 格式字符串
 * @property {string} gmtModified - 修改时间，ISO 8601 格式字符串
 * @property {string} userId - 用户 ID
 * @property {string} examId - 考试 ID
 * @property {string} message - 消息，假设是一个 JSON 字符串
 */
export interface ExamRecord {
    gmtCreate: string;
    gmtModified: string;
    userId: string;
    examId: string;
    message: string;
}
/**
 * 启动考试
 *
 * @function launchExam
 * @param {string} data - 用户 ID
 * @returns {Promise<ApiResponse<ExamRecord>>} - 返回考试记录的响应结果
 */
export declare const launchExam: (data: userId) => Promise<ApiResponse<ExamRecord>>;
//# sourceMappingURL=launchExam.d.ts.map