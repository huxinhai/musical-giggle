import { ApiResponse } from "./global";
export interface getAllOccupationInfoRe {
    id: number;
    occupation: string;
    position: string;
    region: string;
}
export declare const getAllOccupationInfo: (data: {
    companyId: number;
    region: "\u56FD\u5185" | "\u56FD\u5916";
}) => Promise<ApiResponse<getAllOccupationInfoRe[]>>;
//# sourceMappingURL=getAllOccupationInfo.d.ts.map