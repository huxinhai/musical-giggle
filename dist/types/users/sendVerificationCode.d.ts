import type { ApiResponse } from "../global";
/**
 * 发送验证码
 * @param data 发送验证码数据
 * @returns 发送验证码结果
 */
export declare const sendVerificationCode: (data: {
    account: string;
    type: number;
}) => Promise<ApiResponse<boolean>>;
//# sourceMappingURL=sendVerificationCode.d.ts.map