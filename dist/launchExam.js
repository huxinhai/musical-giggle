import { post } from "./http/http";
/**
 * 启动考试
 *
 * @function launchExam
 * @param {string} data - 用户 ID
 * @returns {Promise<ApiResponse<ExamRecord>>} - 返回考试记录的响应结果
 */
export const launchExam = (data) => post('/userService/launchExam', data);
