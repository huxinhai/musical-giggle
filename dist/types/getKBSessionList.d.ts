import { ApiResponse, userId } from "./global";
export interface getKBSessionListResponse {
    gmtModified: string;
    skey: string | null;
    chunk: string;
    sessionId: string;
    gmtCreate: string;
    userId: string;
    chunkId: string;
    info: any | null;
}
export declare const getKBSessionList: (data: userId) => Promise<ApiResponse<getKBSessionListResponse[]>>;
//# sourceMappingURL=getKBSessionList.d.ts.map