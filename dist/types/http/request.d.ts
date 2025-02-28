import type { AxiosInstance } from 'axios';
type Fn = () => string | Promise<string>;
export declare class Request {
    static axiosInstance: AxiosInstance;
    static getToken: Promise<string>;
    static UnauthorizedCb?: Fn;
    static init(baseURL: string, getToken: Fn, UnauthorizedCb?: Fn): import("axios").AxiosStatic;
    private static initInterceptors;
}
export {};
//# sourceMappingURL=request.d.ts.map