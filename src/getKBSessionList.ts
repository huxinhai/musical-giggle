import { ApiResponse, userId } from "./global";
import { post } from "./http/http";


export interface getKBSessionListResponse {
    gmtModified: string;
    skey: string | null;
    chunk: string;
    sessionId: string;
    gmtCreate: string;
    userId: string;
    chunkId: string;
    info: any | null; // 根据实际情况调整类型
  }

export const  getKBSessionList = (data:userId) => post<ApiResponse<getKBSessionListResponse[]>>('/userService/getKBSessionList', data)
