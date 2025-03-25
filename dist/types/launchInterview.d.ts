import type { ApiResponse, userId } from "./global";
/**
 * 启动面试所需的数据接口
 * @interface LaunchInterviewData
 * @property {userId} phone - 用户手机号
 * @property {'pc' | 'mobile'} mode - 面试模式
 * @property {string} interViewInfo - 面试相关信息
 * @property {'desktop' | 'mobile'} terminal - 终端类型
 */
export interface LaunchInterviewData {
    phone: userId;
    mode: 'pc' | 'mobile';
    interViewInfo: string;
    terminal: 'desktop' | 'mobile';
}
/**
 * 面试会话响应数据接口
 * @interface launchInterviewResponse
 * @property {string} interviewID - 面试会话唯一标识符
 * @property {boolean} launch - 是否启动面试
 * @property {string} msg - 消息内容，通常包含时间戳信息
 * @property {number} times - 尝试次数
 * @property {string} username - 用户名
 */
export interface launchInterviewResponse {
    interviewID: string;
    launch: boolean;
    msg: string;
    times: number;
    username: string;
    serviceInstance: {
        ip: string;
        port: string;
    };
}
/**
 * 启动面试会话
 * @async
 * @function launchInterview
 * @param {LaunchInterviewData} data - 启动面试所需的数据
 * @returns {Promise<ApiResponse<launchInterviewResponse>>} 返回面试会话的响应数据
 */
export declare const launchInterview: (data: LaunchInterviewData) => Promise<ApiResponse<launchInterviewResponse>>;
//# sourceMappingURL=launchInterview.d.ts.map