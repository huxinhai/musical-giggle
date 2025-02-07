import {post} from "./http/http";
import type {ApiResponse} from "./global";

/**
 * 公共问题数据的请求参数
 * @interface getPublicQuestionData
 * @property {-1} companyId - 公司 ID，默认为 -1
 * @property {number} count - 请求的问题数量
 * @property {number} positionId - 职位 ID
 * @property {number} start - 请求的起始位置
 * @property {string | number} userId - 用户 ID，可以是字符串或数字
 */
export interface getPublicQuestionData {
    companyId: -1
    count: number
    positionId: number
    start: number
    userId: string | number
}

/**
 * 公共问题接口响应数据
 * @interface getPublicQuestionResponse
 * @property {number} totalCount - 问题的总数
 * @property {GetPublicQuestionResult[]} listResult - 问题结果列表
 */
export interface getPublicQuestionResponse {
    totalCount: number
    listResult: GetPublicQuestionResult[]
}

/**
 * 公共问题的单条结果类型
 * @interface GetPublicQuestionResult
 * @property {string} gmtModified - 最后修改时间
 * @property {number} companyId - 公司 ID
 * @property {string} questionId - 问题 ID
 * @property {string} question - 问题内容
 * @property {string} answer - 答案内容
 * @property {number} positionId - 职位 ID
 * @property {number} interviewCnt - 面试次数
 * @property {string} gmtCreate - 创建时间
 */
export interface GetPublicQuestionResult {
    gmtModified: string
    companyId: number
    questionId: string
    question: string
    answer: string
    positionId: number
    interviewCnt: number
    gmtCreate: string
}

/**
 * 获取公共问题
 *
 * @function getPublicQuestion
 * @param {getPublicQuestionData} data - 请求参数
 * @returns {Promise<ApiResponse<getPublicQuestionResponse>>} - 包含公共问题数据的响应结果
 */
export const getPublicQuestion = (data: getPublicQuestionData): Promise<ApiResponse<getPublicQuestionResponse>> =>
    post<ApiResponse<getPublicQuestionResponse>>(
        '/api/userService/getPublicQuestion',
        data
    )
