export interface ApiResponse<T> {
    status: boolean;
    message: string;
    data: T;
}
export interface userId {
    userId: string | number;
}
export interface Pagination {
    start: number;
    count: number;
}
export interface Signal {
    signal?: AbortSignal;
}
//# sourceMappingURL=global.d.ts.map