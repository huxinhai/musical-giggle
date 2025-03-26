import type { ApiResponse } from "../global";
export interface getHpTopicsResponse {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    info: string;
    rankId: number;
}
export declare const getHpTopics: (data?: {}) => Promise<ApiResponse<getHpTopicsResponse[]>>;
//# sourceMappingURL=getHpTopics.d.ts.map