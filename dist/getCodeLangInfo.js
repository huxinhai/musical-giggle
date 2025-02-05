import { post } from "./http/http";
export const getCodeLangInfo = (data = {}) => post('/userService/getCodeLangInfo', data);
