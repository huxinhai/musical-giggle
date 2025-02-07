import type { ApiResponse } from "./global";
import { post } from "./http/http";
import type { rechargePackageData } from "./rechargePackage";

interface rechargeData extends Omit<rechargePackageData, 'packageId'> {
    region: 'cn'
}

export const recharge = (data: rechargeData) => 
    post<ApiResponse<string>>('/userService/recharge', data)
