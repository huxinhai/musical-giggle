import {post} from "./http/http";
import {ApiResponse} from "./global";

interface SendVerifyCodeData {
    captchaId?: string
    phone: string | number
    type: 'phone' | 'email'
    utdid?: string
}

export const sendVerifyCode = async (data:SendVerifyCodeData,cb?:()=>void) => {
    if (!data?.phone) {
        cb?.()
        return {status: false};
    }
    return await post<ApiResponse<true>>('/userService/sendVerifyCode', data);
}
