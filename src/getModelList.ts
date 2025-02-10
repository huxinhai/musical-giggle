import type { ApiResponse } from "./global";
import { post } from "./http/http";

/** 
 * 模型信息接口
 * @interface getModelListResponse
 * @description 定义了AI模型的基本信息结构
 */
export interface getModelListResponse {
    /** 
     * 模型ID
     * @description 模型的唯一标识符
     */
    modelId: string;
    
    /** 
     * 模型名称
     * @description 模型的显示名称
     */
    modelName: string;
    
    /** 
     * 终端类型
     * @description 模型支持的终端类型
     * @enum {string} 'written' - 文字终端
     * @enum {string} 'voice' - 语音终端
     */
    terminal: 'written' | 'voice';
    
    /** 
     * 价格
     * @description 模型使用的价格（单位：分）
     */
    price: number;
    
    /** 
     * 每分钟处理量
     * @description 模型每分钟可处理的token数量
     */
    tpm: number;
    
    /** 
     * 模型描述
     * @description 模型的详细描述信息
     */
    modelDesc: string;
}

/**
 * 获取模型列表
 * @description 获取所有可用的AI模型列表
 * @returns {Promise<ApiResponse<getModelListResponse[]>>} 返回包含模型列表的Promise
 * @example
 * ```typescript
 * const response = await getModelList();
 * if (response.code === 200) {
 *   const models = response.data;
 *   // 处理模型列表数据
 * }
 * ```
 */
export const getModelList = (data = {}): Promise<ApiResponse<getModelListResponse[]>> =>
    post<ApiResponse<getModelListResponse[]>>('/userService/getModelList', data);

