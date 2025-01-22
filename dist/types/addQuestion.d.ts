import { ApiResponse, userId } from "./global";
/**
 * 添加问题请求参数类型
 * @interface addQuestionData
 * @extends userId
 * @property {string} examId - 考试 ID
 * @property {string[]} image - 图片数组，包含相关问题的图片 URL
 */
export interface addQuestionData extends userId {
    examId: string;
    image: string[];
}
/**
 * 添加问题
 *
 * @function addQuestion
 * @param {addQuestionData} data - 请求参数，包含用户 ID、考试 ID 和图片数组
 * @returns {Promise<ApiResponse<string>>} - 返回添加问题的响应结果，通常为成功消息
 */
export declare const addQuestion: (data: addQuestionData) => Promise<ApiResponse<string>>;
//# sourceMappingURL=addQuestion.d.ts.map