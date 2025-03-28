import type { ApiResponse } from "../global";
import { post } from "../http/http";


export const divinationGetH5Version = (data = {}) => post<ApiResponse<string>>('/divinationService/divination/getH5Version', data)
