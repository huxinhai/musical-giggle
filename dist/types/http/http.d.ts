import type { Signal } from '../global';
export declare const post: <T = any, D = any>(url: string, data?: D & Signal) => Promise<T>;
export declare const get: <T = any, D = any>(url: string, data?: D & Signal) => Promise<T>;
export declare const put: <T = any, D = any>(url: string, data?: D & Signal) => Promise<T>;
export declare const patch: <T = any, D = any>(url: string, data?: D & Signal) => Promise<T>;
export declare const del: <T = any, D = any>(url: string, data?: D & Signal) => Promise<T>;
//# sourceMappingURL=http.d.ts.map