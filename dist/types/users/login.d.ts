import type { ApiResponse } from "../global";
export interface LoginResponse {
    access_token: string;
    account: string;
    nickname: string | null;
    avatar: string | null;
    createTime: string;
}
export declare const login: (data: {
    account: string;
    pwd: string;
}) => Promise<ApiResponse<LoginResponse>>;
//# sourceMappingURL=login.d.ts.map