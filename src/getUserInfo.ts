import {ApiResponse} from "./global";
import {post} from "./http/http";

export interface AbConfig {
    mjExp: number;
    hpExp: number;
    payExp: number;
    guideExp: number;
    qtExp: number;
}

export interface PackageInfo {
    // 根据实际数据结构定义，如果为空可以使用 `null` 或 `undefined`
    [key: string]: any; // 如果不确定具体结构，可以使用 any
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

export const getUserInfo = (data: { phone: string }) =>
    post<ApiResponse<UserInfoResponse>>('/api/userService/getUserInfo', data)
