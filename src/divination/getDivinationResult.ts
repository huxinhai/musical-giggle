import type { ApiResponse, Signal } from "../global";
import { post } from "../http/http";

export const divinationGetDivinationResult = (data: { divinationId: string } & Signal) =>
    post<ApiResponse<any>>('/divinationService/divination/getDivinationResult', data)
