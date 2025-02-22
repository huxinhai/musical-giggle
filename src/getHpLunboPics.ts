import type {ApiResponse} from "./global";
import {post} from "./http/http";

/**
 * 首页轮播图响应类型
 * @interface getHpLunboPicsResponse
 * @property {string} picUrl - 图片的 URL
 * @property {null | string} jumpUrl - 点击图片跳转的 URL，可以为 null
 * @property {null} info - 保留字段，目前为 null
 * @property {number} id - 图片的唯一标识 ID
 */
export interface getHpLunboPicsResponse {
    picUrl: string
    jumpUrl: null | string
    info: null
    id: number
}

/**
 * 获取首页轮播图
 *
 * @function getHpLunboPics
 * @param data.type - 不传或传appHp-首页轮播图 appLogin-登录页轮播图
 * @returns {Promise<ApiResponse<getHpLunboPicsResponse[]>>} - 包含轮播图信息数组的响应结果
 */
export const getHpLunboPics = (data?:{type:'appHp' | 'appLogin'}): Promise<ApiResponse<getHpLunboPicsResponse[]>> =>
    post<ApiResponse<getHpLunboPicsResponse[]>>(
        '/api/userService/getHpLunboPics',
        data || {}
    )
