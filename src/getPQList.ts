import { ApiResponse, Pagination } from "./global";
import { post } from "./http/http";


 interface getPQListRe {
    answer
: 
string 
gmtCreate
: 
string
gmtModified
: 
string
question
: 
string
questionId
: 
string
}
export interface getPQListResponse {
    totalCount: number
    data: getPQListRe[]
}

export const getPQList = (data:{pqId:string} & Pagination) => post<ApiResponse<getPQListResponse>>('/userService/getPQList',data)
