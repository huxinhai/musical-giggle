import {post} from "./http/http";
import {ApiResponse, userId} from "./global";

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
    gmtCreate: string // 创建时间，ISO 8601 格式字符串
    gmtModified: string // 修改时间，ISO 8601 格式字符串
    userId: string // 用户ID
    examId: string // 考试ID
    message: string // 消息，这里假设是一个JSON字符串
}

/**
 * 启动考试
 *
 * @function launchExam
 * @param {string} data - 用户 ID
 * @param {string} examType - 考试类型
 * @returns {Promise<ApiResponse<ExamRecord>>} - 返回考试记录的响应结果
 */
export const launchExam = (data: userId, examType: string): Promise<ApiResponse<ExamRecord>> =>
    post<ApiResponse<ExamRecord>>('/userService/launchExam', {data, examType})

