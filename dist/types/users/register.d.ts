import type { ApiResponse } from "../global";
/**
 * 注册用户
 * @param data 注册数据
 * @returns 注册结果
 */
export declare const register: (data: {
    account: string;
    pwd: string;
    code: string;
    invitationCode?: string;
}) => Promise<ApiResponse<boolean>>;
//# sourceMappingURL=register.d.ts.map