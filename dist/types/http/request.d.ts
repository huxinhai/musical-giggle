import type { AxiosInstance } from 'axios';
type Fn = (data?: any) => string | Promise<string>;
export declare class Request {
    static axiosInstance: AxiosInstance;
    static getToken: Promise<string>;
    static UnauthorizedCb?: (data: any) => void;
    static init(baseURL: string, getToken: Fn, UnauthorizedCb?: Fn): import("axios").AxiosStatic;
    private static initInterceptors;
    private static errorHandle;
}
export {};
//# sourceMappingURL=request.d.ts.map