import { ApiResponse } from "./global";
export interface UserCommentResponse {
    gmtCreate: string;
    gmtModified: string;
    userName: string;
    position: string;
    rateScore: number;
    usage: number;
    school: string;
    positionType: string;
    logoUrl: string;
    comment: string;
    offerUrl: string;
    companyName: string;
}
/**
 * 获取用户评价
 *
 * @function getUserComments
 * @param {object} data - 请求参数
 * @returns {Promise<ApiResponse<UserCommentResponse>>} - 返回包含用户评论信息的响应结果
 */
export declare const getUserComments: (data: {}) => Promise<ApiResponse<UserCommentResponse>>;
//# sourceMappingURL=getUserComments.d.ts.map