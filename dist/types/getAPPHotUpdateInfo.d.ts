import type { ApiResponse } from "./global";
/**
 * APP热更新信息响应数据
 * @interface GetAPPHotUpdateInfoResponse
 * @property {number} id - 主键ID
 * @property {string} gmtCreate - 创建时间
 * @property {string} gmtModified - 修改时间
 * @property {number} version - APP版本号
 * @property {string} downloadAndroidUrl - 安卓版本下载链接
 * @property {string} downloadIosUrl - iOS版本下载链接
 */
interface GetAPPHotUpdateInfoResponse {
    id: number;
    gmtCreate: string;
    gmtModified: string;
    info: {
        android: {
            version: number;
            downloadUrl: string;
        };
        ios: {
            version: number;
            downloadUrl: string;
        };
    };
}
/**
 * 获取APP热更新信息
 * @async
 * @function getAPPHotUpdateInfo
 * @param {Record<string, any>} [data={}] - 请求参数（可选）
 * @returns {Promise<ApiResponse<GetAPPHotUpdateInfoResponse>>} 返回包含 Android 和 iOS 版本信息的响应
 *
 * @example
 * const response = await getAPPHotUpdateInfo();
 * console.log(`Android 版本: ${response.data.info.android.version}`);
 * console.log(`Android 下载链接: ${response.data.info.android.downloadUrl}`);
 * console.log(`iOS 版本: ${response.data.info.ios.version}`);
 * console.log(`iOS 下载链接: ${response.data.info.ios.downloadUrl}`);
 */
export declare const getAPPHotUpdateInfo: (data?: Record<string, any>) => Promise<ApiResponse<GetAPPHotUpdateInfoResponse>>;
export {};
//# sourceMappingURL=getAPPHotUpdateInfo.d.ts.map