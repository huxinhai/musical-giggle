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
}
export declare const getUserInfo: (data: {
    phone: string;
}) => Promise<ApiResponse<UserInfoResponse>>;
//# sourceMappingURL=getUserInfo.d.ts.map