import type { ApiResponse } from "./global";
/**
 * 时间窗口配置接口
 * @interface TimeFrame
 * @property {string} timeframeId - 时间窗口标识符（如："3h"）
 * @property {string} timeframeName - 时间窗口显示名称（如："3小时"）
 * @property {string} timeframeValue - 时间窗口值，以毫秒为单位
 */
export interface getSupportTimeFrameResponse {
    timeframeId: string;
    timeframeName: string;
    timeframeValue: string;
}
/**
 * 获取全部时间窗口
 * @param {Record<string, any>} data - 请求参数
 * @returns {Promise<ApiResponse<getSupportTimeFrameResponse[]>>} 返回时间窗口配置列表
 */
export declare const getSupportTimeFrame: (data?: Record<string, any>) => Promise<ApiResponse<getSupportTimeFrameResponse[]>>;
//# sourceMappingURL=getSupportTimeFrame.d.ts.map