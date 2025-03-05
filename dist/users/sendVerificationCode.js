import { post } from "../http/http";
/**
 * 发送验证码
 * @param data 发送验证码数据
 * @returns 发送验证码结果
 */
export const sendVerificationCode = (data) => post('/userService/h/users/sendVerificationCode', data);
