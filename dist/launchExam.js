import { post } from "./http/http";
export const launchExam = (data) => post('/userService/launchExam', data);
