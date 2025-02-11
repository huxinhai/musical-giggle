import { post } from "./http/http";
/**
 * 启动面试会话
 * @async
 * @function launchInterview
 * @param {LaunchInterviewData} data - 启动面试所需的数据
 * @returns {Promise<ApiResponse<launchInterviewResponse>>} 返回面试会话的响应数据
 */
export const launchInterview = async (data) => post('/userService/launchInterview', data);
