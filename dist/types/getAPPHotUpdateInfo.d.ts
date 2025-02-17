import type { ApiResponse } from "./global";
/**
 * APP热更新信息响应数据
 * @interface GetAPPHotUpdateInfoResponse
 * @property {number} version - APP版本号
 * @property {string} downloadAndroidUrl - 安卓版本下载链接
 * @property {string} downloadIosUrl - iOS版本下载链接
 */
interface GetAPPHotUpdateInfoResponse {
    version: number;
    downloadAndroidUrl: string;
    downloadIosUrl: string;
}
/**
 * 获取APP热更新信息
 * @async
 * @function getAPPHotUpdateInfo
 * @param {Record<string, any>} [data={}] - 请求参数（可选）
 * @returns {Promise<GetAPPHotUpdateInfoResponse>} 返回APP热更新信息
 *
 * @example
 * const response = await getAPPHotUpdateInfo();
 * console.log(`当前APP版本: ${response.version}`);
 * console.log(`安卓下载链接: ${response.downloadAndroidUrl}`);
 * console.log(`iOS下载链接: ${response.downloadIosUrl}`);
 */
export declare const getAPPHotUpdateInfo: (data?: Record<string, any>) => Promise<ApiResponse<GetAPPHotUpdateInfoResponse>>;
export {};
//# sourceMappingURL=getAPPHotUpdateInfo.d.ts.map