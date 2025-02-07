import type { ApiResponse, Pagination } from "./global";
interface getPQListRe {
    answer: string;
    gmtCreate: string;
    gmtModified: string;
    question: string;
    questionId: string;
}
export interface getPQListResponse {
    totalCount: number;
    data: getPQListRe[];
}
export declare const getPQList: (data: {
    pqId: string;
} & Pagination) => Promise<ApiResponse<getPQListResponse>>;
export {};
//# sourceMappingURL=getPQList.d.ts.map