import { ApiResponse } from "./global";
interface SendVerifyCodeData {
    captchaId?: string;
    phone: string | number;
    type: 'phone' | 'email';
    utdid?: string;
}
export declare const sendVerifyCode: (data: SendVerifyCodeData, cb?: () => void) => Promise<ApiResponse<true> | {
    status: boolean;
}>;
export {};
//# sourceMappingURL=sendVerifyCode.d.ts.map