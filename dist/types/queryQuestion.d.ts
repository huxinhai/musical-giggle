import { ApiResponse } from "./global";
/**
 * 添加问题请求参数类型
 * @interface queryQuestionData
 * @property {string} questionId - 考试 ID
 */
export interface queryQuestionData {
    questionId: string;
}
/**
 * 查询问题响应数据类型
 * @interface queryQuestionResponse
 */
export interface queryQuestionResponse {
    id: number;
    gmtCreate: string;
    gmtModified: string;
    userId: string;
    examId: string;
    questionId: string;
    status: 'parsing' | 'finished' | 'error';
    question: string;
    answer: string;
    imageUrl: string;
    info: string | {
        modelResultMap: {
            [key: string]: {
                result: string;
                desc: string;
            };
        };
    };
}
/**
 * 查询问题
 *
 * @function queryQuestion
 * @param {queryQuestionData} data - 请求参数，包含问题相关的数据，包括用户 ID、考试 ID 和图片数组等
 * @returns {Promise<ApiResponse<queryQuestionResponse>>} - 返回查询问题的响应结果
 */
export declare const queryQuestion: (data: queryQuestionData) => Promise<ApiResponse<queryQuestionResponse>>;
//# sourceMappingURL=queryQuestion.d.ts.map