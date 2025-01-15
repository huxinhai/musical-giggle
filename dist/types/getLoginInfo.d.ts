import { ApiResponse } from "./global";
/**
 * 注册来源类型
 * @interface getLoginInfoItem
 * @property {string} sourceId - 登录来源的 ID
 * @property {string} sourceName - 登录来源的名称
 */
export interface getLoginInfoItem {
    sourceId: string;
    sourceName: string;
}
/**
 * 获取所有注册来源
 *
 * @function getLoginInfo
 * @returns {Promise<ApiResponse<getLoginInfoItem[]>>} - 返回包含注册来源项的响应结果
 */
export declare const getLoginInfo: () => Promise<ApiResponse<getLoginInfoItem[]>>;
//# sourceMappingURL=getLoginInfo.d.ts.map