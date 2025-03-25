import type { ApiResponse } from "../global";
import { post } from "../http/http";

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

export const divinationCreateDivination = (data: divinationCreateDivination) =>
    post<ApiResponse<string>>('/DivinationService/divination/createDivination', data)
