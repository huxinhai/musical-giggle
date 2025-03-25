import type { ApiResponse } from "../global";
export interface divinationCreateDivination {
    sessionId: string;
    question: string;
    userId: string;
    fromAddress: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
}
export declare const divinationCreateDivination: (data: divinationCreateDivination) => Promise<ApiResponse<string>>;
//# sourceMappingURL=createDivination.d.ts.map