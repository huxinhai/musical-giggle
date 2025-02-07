import type { ApiResponse } from "./global";
export interface rechargePackageData {
    "phone": string | number;
    "price": number;
    "packageId": string;
    "payMethod": "alipay" | 'wechat';
    "mode": "pc" | 'mobile';
}
export declare const rechargePackage: (data: rechargePackageData) => Promise<ApiResponse<string>>;
//# sourceMappingURL=rechargePackage.d.ts.map