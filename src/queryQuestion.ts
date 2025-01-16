import {post} from "./http/http";
import {ApiResponse} from "./global";
import {addQuestionData} from "./addQuestion";

/**
 * 查询问题响应数据类型
 * @interface queryQuestionResponse
 * @property {boolean} queryStatus - 查询状态，表示查询是否成功
 * @property {string} queryMessage - 查询消息，通常包含错误或成功的描述
 * @property {string} data - 查询的结果数据，可能是问题的内容或其他信息
 */
export interface queryQuestionResponse {
    queryStatus: boolean
    queryMessage: string
    data: string
}

/**
 * 查询问题
 *
 * @function queryQuestion
 * @param {addQuestionData} data - 请求参数，包含问题相关的数据，包括用户 ID、考试 ID 和图片数组等
 * @returns {Promise<ApiResponse<queryQuestionResponse>>} - 返回查询问题的响应结果
 */
export const queryQuestion = (data: addQuestionData): Promise<ApiResponse<queryQuestionResponse>> =>
    post<ApiResponse<queryQuestionResponse>>('/userService/queryQuestion', data)

