export interface ApiResponse<T> {
  status: boolean // 请求是否成功
  message: string // 返回的消息
  data: T
}

export interface userId {
  userId: string | number
}

export interface Pagination {
  start: number
  count: number
}

export interface Signal {
  signal?: AbortSignal
}