import type { ApiResponse } from "./global";
import { post } from "./http/http";

/** 考试详情更新参数接口 */
export interface updateExamDetailParams {
  /** 问题ID */
  questionId: string;
  /** 问题内容 */
  question: string;
  /** 答案内容 */
  answer: string;
}

/**
 * 更新考试详情
 * @param data - 更新参数
 * @returns Promise<ApiResponse<boolean>> - 返回更新操作的结果
 */
export const updateExamDetail = (data: updateExamDetailParams): Promise<ApiResponse<boolean>> => 
  post<ApiResponse<boolean>>('/userService/updateExamDetail', data);
