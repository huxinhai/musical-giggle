
import type { UserData } from './addNewUser'
import type { UserInfo } from './getAllUserList'
import type { ApiResponse } from './global'
import { post } from './http/http'


export const updateUserInfo = async (userInfo: UserData) => post<ApiResponse<UserInfo | null>>('/userService/updateUserInfo', userInfo)
