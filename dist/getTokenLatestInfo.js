import { post } from "./http/http";
/**
 * 获取代币的最新信息
 * @async
 * @function getTokenLatestInfo
 * @param {GetTokenLatestInfoParams} data - 请求参数
 * @returns {Promise<GetTokenLatestInfoResponse>} 返回代币最新信息
 *
 * @example
 * const response = await getTokenLatestInfo({
 *   ids: "CKS6qSkP2caywGiT2qdVQ5HfyoM2s7kreHHP6mQ3pump"
 * });
 * console.log(response["CKS6qSkP2caywGiT2qdVQ5HfyoM2s7kreHHP6mQ3pump"].price);
 */
export const getTokenLatestInfo = async (data) => post('/dataService/getTokenLatestInfo', data);
