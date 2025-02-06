
import type { UserData } from './addNewUser'
import type { UserInfo } from './getAllUserList'
import type { ApiResponse } from './global'
import { post } from './http/http'


export const deleteUser = async (userInfo: UserData) => post<ApiResponse<UserInfo | null>>('/userService/deleteUser', userInfo)
