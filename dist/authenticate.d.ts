import { ApiResponse } from "./global";
export interface authenticateResponse {
    remain: number;
    username: string;
    role: string;
    src: string;
    abConfig: {
        mjExp: number;
    };
    token: string;
}
export declare const authenticate: (data: {
    code: string | number;
    phone: string | number;
    src: "default";
    pathParam: "";
    utdid?: string;
}) => Promise<ApiResponse<authenticateResponse>>;
//# sourceMappingURL=authenticate.d.ts.map