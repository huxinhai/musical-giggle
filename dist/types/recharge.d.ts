import type { ApiResponse } from "./global";
import type { rechargePackageData } from "./rechargePackage";
interface rechargeData extends Omit<rechargePackageData, 'packageId'> {
    region: 'cn';
}
export declare const recharge: (data: rechargeData) => Promise<ApiResponse<string>>;
export {};
//# sourceMappingURL=recharge.d.ts.map