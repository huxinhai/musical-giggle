import { ApiResponse } from "./global";
interface SendVerifyCodeData {
    captchaId?: string;
    phone: string | number;
    type: 'phone' | 'email';
    utdid?: string;
}
/**
 * 发送验证码
 * @param data - 发送验证码所需的数据对象
 * @param data.captchaId - 验证码ID，可选
 * @param data.phone - 用户电话号码
 * @param data.type - 发送验证码的类型，可以是 'phone' 或 'email'
 * @param data.utdid - 可选的 utdid 参数
 * @param cb - 可选的回调函数，在某些情况下调用
 * @returns
 */
export declare const sendVerifyCode: (data: SendVerifyCodeData, cb?: () => void) => Promise<ApiResponse<true> | {
    status: boolean;
    message: string;
}>;
export {};
//# sourceMappingURL=sendVerifyCode.d.ts.map