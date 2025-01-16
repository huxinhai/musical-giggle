import { post } from "./http/http";
/**
 * 登录
 * @param data - 认证所需的数据对象
 * @param isApi - 是否使用添加api前缀，默认为 true
 * @param data.code - 验证码或验证码数字
 * @param data.phone - 用户电话号码或电话数字
 * @param data.src - 来源，默认为 'default'
 * @param data.pathParam - 路径参数，默认为空字符串
 * @param data.utdid - 可选的 utdid 参数
 * @returns
 */
export const authenticate = (data, isApi = !0) => post(`${isApi ? '/api' : ''}/userService/authenticate`, data);
