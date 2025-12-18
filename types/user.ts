// API 响应类型
export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

// 用户信息类型
export interface User {
  id: string
  username: string
  nickname: string | null
  phone: string | null
  email: string | null
  createdAt: string // ISO 8601 格式
}

// 登录请求类型
export interface LoginRequest {
  username: string
  password: string
}

// 注册请求类型
export interface RegisterRequest {
  username: string
  password: string
}

// 登录响应类型
export interface LoginResponse {
  token: string
  user: User
}

// 更新用户信息请求类型
export interface UpdateProfileRequest {
  phone?: string | null
  email?: string | null
}

// 修改密码请求类型
export interface ChangePasswordRequest {
  oldPassword: string
  newPassword: string
}

