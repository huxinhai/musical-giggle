import { post } from "./http/http";
/**
 * 添加问题
 *
 * @function addQuestion
 * @param {addQuestionData} data - 请求参数，包含用户 ID、考试 ID 和图片数组
 * @returns {Promise<ApiResponse<string>>} - 返回添加问题的响应结果，通常为成功消息
 */
export const addQuestion = (data) => post('/userService/addQuestion', data);
