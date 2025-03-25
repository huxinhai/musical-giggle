import type { ApiResponse, userId } from "../global";
import { post } from "../http/http";

export const divinationCreateSession = (data:userId) => 
    post<ApiResponse<string>>('/DivinationService/divination/createSession', data)

