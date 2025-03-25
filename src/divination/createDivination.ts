import type { ApiResponse } from "../global";
import { post } from "../http/http";

export interface divinationCreateDivinationData {
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

export const divinationCreateDivination = (data: divinationCreateDivinationData) =>
    post<ApiResponse<string>>('/divinationService/divination/createDivination', data)
