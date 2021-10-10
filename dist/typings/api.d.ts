export interface ApiErrorResponse<T = undefined> {
    result: boolean;
    code: string;
    message: string;
    data: T;
}
