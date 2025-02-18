import { post } from "./http/http";
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
export const getAPPHotUpdateInfo = (data = {}) => post('/userService/getAPPHotUpdateInfo', data);
