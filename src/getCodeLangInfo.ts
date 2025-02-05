import { ApiResponse } from "./global";
import { post } from "./http/http";

export interface CodeLangInfoResponse {
    codeLang:string
    id:number
}

export const getCodeLangInfo = (data = {}) => post<ApiResponse<CodeLangInfoResponse[]>>('/userService/getCodeLangInfo',data)
