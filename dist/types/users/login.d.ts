import type { ApiResponse } from "../global";
export declare const login: (data: {
    account: string;
    pwd: string;
}) => Promise<ApiResponse<{
    access_token: string;
}>>;
//# sourceMappingURL=login.d.ts.map