import { ApiResponse } from "./global";
export interface CodeLangInfoResponse {
    codeLang: string;
    id: number;
}
export declare const getCodeLangInfo: (data?: {}) => Promise<ApiResponse<CodeLangInfoResponse[]>>;
//# sourceMappingURL=getCodeLangInfo.d.ts.map