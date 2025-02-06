import { ApiResponse } from "./global";
export interface AbConfig {
    mjExp: number;
    hpExp: number;
    payExp: number;
    guideExp: number;
    qtExp: number;
}
export interface PackageInfo {
    [key: string]: any;
}
export interface UserInfoResponse {
    username: string;
    token: string | null;
    remain: number;
    role: string;
    src: string;
    abConfig: AbConfig;
    packageInfo: PackageInfo | null;
    expTime: string;
}
/**
 * 获取用户信息
 * @param data - 包含电话号码的对象
 * @param isApi - 是否使用 API
 * @param data.phone - 用户的电话号码
 * @returns
 */
export declare const getUserInfo: (data: {
    phone: string;
}, isApi?: boolean) => Promise<ApiResponse<UserInfoResponse>>;
//# sourceMappingURL=getUserInfo.d.ts.map