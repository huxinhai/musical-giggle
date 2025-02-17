import { post } from "./http/http";
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
export const getAPPHotUpdateInfo = (data = {}) => post('/userService/getAPPHotUpdateInfo', data);
