import type { ApiResponse } from "../global";
import { del } from "../http/http";

export const unsubscribe = (data: { id: number }) =>
    del<ApiResponse<string>>(`/userService/unsubscribe/${data.id}`)
