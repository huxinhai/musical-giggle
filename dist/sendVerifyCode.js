import { post } from "./http/http";
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
export const sendVerifyCode = async (data, cb) => {
    if (!data?.phone) {
        cb?.();
        return { status: false, message: '不能为空' };
    }
    return await post('/userService/sendVerifyCode', data);
};
