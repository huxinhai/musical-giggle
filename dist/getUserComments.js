import { post } from "./http/http";
/**
 * 获取用户评价
 *
 * @function getUserComments
 * @param {object} data - 请求参数
 * @returns {Promise<ApiResponse<UserCommentResponse[]>>} - 返回包含用户评论信息的响应结果
 */
export const getUserComments = (data) => post('/userService/getUserComments', data);
