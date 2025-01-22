import { post } from "./http/http";
/**
 * 查询问题
 *
 * @function queryQuestion
 * @param {queryQuestionData} data - 请求参数，包含问题相关的数据，包括用户 ID、考试 ID 和图片数组等
 * @returns {Promise<ApiResponse<queryQuestionResponse>>} - 返回查询问题的响应结果
 */
export const queryQuestion = (data) => post('/userService/queryQuestion', data);
