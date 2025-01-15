import type { AxiosInstance } from 'axios';
export declare class Request {
    static axiosInstance: AxiosInstance;
    static getToken: () => string;
    static init(baseURL: string, getToken: () => string): import("axios").AxiosStatic;
    private static initInterceptors;
}
//# sourceMappingURL=request.d.ts.map