import type { ApiResponse } from "./global";
/**
 * 获取公告--需要分页数据的接口结果类型
 * @interface getNewsDataResult
 * @property {string} content - 新闻内容
 * @property {string} gmtCreate - 创建时间
 * @property {string} gmtModified - 修改时间
 * @property {string} title - 新闻标题
 */
export interface getNewsDataResult {
    content: string;
    gmtCreate: string;
    gmtModified: string;
    title: string;
}
/**
 * 获取公告--需要分页
 *
 * @function getNews
 * @param {Object} data - 请求参数
 * @param {number} data.count - 请求的新闻数量
 * @param {number} data.start - 请求新闻的起始位置
 * @returns {Promise<ApiResponse<{ totalCount: number; data: getNewsDataResult[] }>>} - 包含新闻列表和总数的响应结果
 */
export declare const getNews: (data: {
    count: number;
    start: number;
}) => Promise<ApiResponse<{
    totalCount: number;
    data: getNewsDataResult[];
}>>;
//# sourceMappingURL=getNews.d.ts.map