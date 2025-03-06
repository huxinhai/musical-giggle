import type { ApiResponse } from "../global";
import { patch } from "../http/http";


export const updateSignals = (data: { id: number, strategyArray: any[] }) =>
    patch<ApiResponse<string>>(`/userService/updateSignals/${data.id}`, { strategyArray: data.strategyArray })
