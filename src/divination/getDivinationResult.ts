import type { ApiResponse } from "../global";
import { post } from "../http/http";

export const divinationGetDivinationResult = (data: { divinationId: string }) =>
    post<ApiResponse<any>>('/divinationService/divination/getDivinationResult', data)
