import type { ApiResponse } from "./global"
import { post } from "./http/http"


export interface rechargePackageData {
    "phone": string | number,
    "price": number,
    "packageId": string,
    "payMethod": "alipay" | 'wechat',
    "mode": "pc" | 'mobile'
}

export const rechargePackage = (data: rechargePackageData) => 
    post<ApiResponse<string>>('/userService/rechargePackage', data)
