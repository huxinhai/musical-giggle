import { post } from "./http/http";
/**
 * 发送告警邮件
 * @returns
 */
export const alertUsers = (data) => post('/dataService/alertUsers', data);
