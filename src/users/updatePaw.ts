import type { ApiResponse } from "../global"
import { patch } from "../http/http"


export const updatePwd = (data: {
    account: string,
    pwd: string,
    code: string
}) => {
    const { account, pwd, code } = data
    return patch<ApiResponse<boolean>>(`/userService/users/updatePwd/${account}`, { pwd, code })
}
