import { ApiResponse } from "./global";
import { post } from "./http/http";



export interface getAllOccupationInfoRe{
    id
: 
number
occupation
: 
string
position
: 
string
region
: 
string
}
export const getAllOccupationInfo = (data:{companyId:number,region:'国内' | '国外'}) => post<ApiResponse<getAllOccupationInfoRe[]>>('/userService/getAllOccupationInfo',data)
