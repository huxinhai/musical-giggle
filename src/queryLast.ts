import type { ApiResponse } from "./global";
import { post } from "./http/http";


export const queryLast = (data: { examId: string }) => post<ApiResponse<any>>('/userService/queryLast', data)
