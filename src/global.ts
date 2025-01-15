export interface ApiResponse<T> {
  status: boolean // 请求是否成功
  message: string // 返回的消息
  data: T
}
