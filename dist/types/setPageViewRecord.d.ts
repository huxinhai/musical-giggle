import { ApiResponse, userId } from "./global";
/**
 * 设置页面访问记录
 * @description 设置页面访问记录
 * @param {object} data - 包含 spm 和 userId 的对象
 * @returns {Promise<ApiResponse<string>>} 返回包含页面访问记录的 Promise
 * @example
 */
export declare const setPageViewRecord: (data: {
    spm: string;
} & userId) => Promise<ApiResponse<string>>;
//# sourceMappingURL=setPageViewRecord.d.ts.map