import type { ApiResponse } from "./global";
export interface getUserGoodCommentsResponse {
    gmtModified: string;
    id: number;
    gmtCreate: string;
    url: string;
    info: null | any;
}
export declare const getUserGoodComments: (data?: {}) => Promise<ApiResponse<getUserGoodCommentsResponse[]>>;
//# sourceMappingURL=getUserGoodComments.d.ts.map