import { post } from "./http/http";
/**
 * 启动考试
 *
 * @function launchExam
 * @param {string} data - 用户 ID
 * @param {string} examType - 考试类型
 * @returns {Promise<ApiResponse<ExamRecord>>} - 返回考试记录的响应结果
 */
export const launchExam = (data, examType) => post('/userService/launchExam', { data, examType });
