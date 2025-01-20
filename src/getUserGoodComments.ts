import {ApiResponse} from "./global";
import {post} from "./http/http";


export interface getUserGoodCommentsResponse {
    gmtModified: string;
    id: number;
    gmtCreate: string;
    url: string;
    info: null | any; // 如果info字段可能包含其他类型的数据，可以使用any，否则建议明确指定类型

}
/*
*   获取用户好评
*  */
export const getUserGoodComments = (data = {}): Promise<ApiResponse<getUserGoodCommentsResponse[]>> =>
    post<ApiResponse<getUserGoodCommentsResponse[]>>('/userService/getUserGoodComments',data)
