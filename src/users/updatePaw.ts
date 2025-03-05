import type { ApiResponse } from "../global"
import { put } from "../http/http"


export const updatePaw = (data: {
    account: string,
    pwd: string,
    code: string
}) => {
    const { account, pwd, code } = data
    return put<ApiResponse<boolean>>(`/users/updatePwd/${account}`, { pwd, code })
}
