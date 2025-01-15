import { post } from "./http/http";
export const sendVerifyCode = async (data, cb) => {
    if (!data?.phone) {
        cb?.();
        return { status: false };
    }
    return await post('/userService/sendVerifyCode', data);
};
