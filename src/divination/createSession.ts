import type { ApiResponse, userId } from "../global";
import { post } from "../http/http";

export const divinationCreateSession = (data:userId) => 
    post<ApiResponse<string>>('/divinationService/divination/createSession', data)

