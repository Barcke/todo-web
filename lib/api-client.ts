import type { ApiResponse, LoginRequest, RegisterRequest, User, UpdateProfileRequest, ChangePasswordRequest, LoginResponse } from "@/types/user"
import type {
  TodoResponse,
  TodoCreateRequest,
  TodoUpdateRequest,
  CalendarDayResponse,
  TemplateResponse,
  TemplateCreateRequest,
  TodoTypeResponse,
  TodoTypeRequest,
  MonthStatisticsResponse,
  TypeStatisticsResponse,
} from "@/types/task"
import { config } from "@/lib/config"

// 在浏览器中使用代理路径，在服务端直接使用后端 URL
const API_BASE_URL = typeof window !== "undefined" ? config.apiBaseUrl : config.backendApiBaseUrl

// Token 存储键名
const TOKEN_KEY = "barcke_token"

// 获取存储的 token
export function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(TOKEN_KEY)
}

// 设置 token
export function setToken(token: string): void {
  if (typeof window === "undefined") return
  localStorage.setItem(TOKEN_KEY, token)
}

// 清除 token
export function clearToken(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(TOKEN_KEY)
}

// API 错误类
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message)
    this.name = "ApiError"
  }
}

// 统一的请求方法
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getToken()
  
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  }

  // 如果不是 FormData，设置 Content-Type
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json"
  }

  // 如果有 token，添加认证 header
  if (token) {
    headers["BARCKE-TOKEN"] = token
  }

  const url = `${API_BASE_URL}${endpoint}`
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    const data = await response.json()

    if (!response.ok) {
      throw new ApiError(
        data.message || "请求失败",
        response.status,
        data
      )
    }

    return data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError("网络错误，请检查网络连接", 0, error)
  }
}

// 构建查询字符串
function buildQueryString(params: Record<string, string | undefined>): string {
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, value)
    }
  })
  const query = searchParams.toString()
  return query ? `?${query}` : ""
}

// API 客户端方法
export const apiClient = {
  // 用户注册
  async register(data: RegisterRequest): Promise<ApiResponse<{ id: string; username: string }>> {
    return request("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  // 用户登录
  async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  // 用户登出
  async logout(): Promise<ApiResponse<void>> {
    return request("/auth/logout", {
      method: "POST",
    })
  },

  // 获取当前用户信息
  async getProfile(): Promise<ApiResponse<User>> {
    return request("/user/profile", {
      method: "GET",
    })
  },

  // 更新用户信息
  async updateProfile(data: UpdateProfileRequest): Promise<ApiResponse<User>> {
    return request("/user/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  // 修改密码
  async changePassword(data: ChangePasswordRequest): Promise<ApiResponse<void>> {
    return request("/user/password", {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  // ========== Todo 模块 ==========
  
  // 创建 Todo
  async createTodo(data: TodoCreateRequest): Promise<ApiResponse<TodoResponse>> {
    return request("/todos", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  // 查询 Todo 列表
  async getTodos(params?: {
    startDate?: string
    endDate?: string
    status?: "pending" | "completed"
  }): Promise<ApiResponse<TodoResponse[]>> {
    const query = buildQueryString({
      startDate: params?.startDate,
      endDate: params?.endDate,
      status: params?.status,
    })
    return request(`/todos${query}`, {
      method: "GET",
    })
  },

  // 获取 Todo 详情
  async getTodoById(id: string): Promise<ApiResponse<TodoResponse>> {
    return request(`/todos/${id}`, {
      method: "GET",
    })
  },

  // 更新 Todo
  async updateTodo(id: string, data: TodoUpdateRequest): Promise<ApiResponse<TodoResponse>> {
    return request(`/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  // 删除 Todo
  async deleteTodo(id: string): Promise<ApiResponse<string>> {
    return request(`/todos/${id}`, {
      method: "DELETE",
    })
  },

  // 标记完成
  async completeTodo(id: string): Promise<ApiResponse<TodoResponse>> {
    return request(`/todos/${id}/complete`, {
      method: "POST",
    })
  },

  // ========== Calendar 模块 ==========

  // 获取月视图数据
  async getMonthView(yearMonth: string): Promise<ApiResponse<CalendarDayResponse[]>> {
    return request(`/calendar/month${buildQueryString({ yearMonth })}`, {
      method: "GET",
    })
  },

  // 获取日视图数据
  async getDayView(date: string): Promise<ApiResponse<TodoResponse[]>> {
    return request(`/calendar/day${buildQueryString({ date })}`, {
      method: "GET",
    })
  },

  // 获取周视图数据
  async getWeekView(weekStartDate: string): Promise<ApiResponse<TodoResponse[]>> {
    return request(`/calendar/week${buildQueryString({ weekStartDate })}`, {
      method: "GET",
    })
  },

  // ========== Template 模块 ==========

  // 创建模板
  async createTemplate(data: TemplateCreateRequest): Promise<ApiResponse<TemplateResponse>> {
    return request("/templates", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  // 获取模板列表
  async getTemplates(): Promise<ApiResponse<TemplateResponse[]>> {
    return request("/templates", {
      method: "GET",
    })
  },

  // 获取模板详情
  async getTemplateById(id: string): Promise<ApiResponse<TemplateResponse>> {
    return request(`/templates/${id}`, {
      method: "GET",
    })
  },

  // 更新模板
  async updateTemplate(id: string, data: TemplateCreateRequest): Promise<ApiResponse<TemplateResponse>> {
    return request(`/templates/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  // 删除模板
  async deleteTemplate(id: string): Promise<ApiResponse<string>> {
    return request(`/templates/${id}`, {
      method: "DELETE",
    })
  },

  // 添加模板项
  async addTemplateTodo(templateId: string, title: string, typeId?: string): Promise<ApiResponse<any>> {
    return request(`/templates/${templateId}/todos${buildQueryString({ title, typeId })}`, {
      method: "POST",
    })
  },

  // 更新模板项
  async updateTemplateTodo(
    templateId: string,
    todoId: string,
    params?: { title?: string; typeId?: string }
  ): Promise<ApiResponse<any>> {
    return request(`/templates/${templateId}/todos/${todoId}${buildQueryString(params || {})}`, {
      method: "PUT",
    })
  },

  // 删除模板项
  async deleteTemplateTodo(templateId: string, todoId: string): Promise<ApiResponse<string>> {
    return request(`/templates/${templateId}/todos/${todoId}`, {
      method: "DELETE",
    })
  },

  // 应用模板生成 Todo
  async applyTemplate(templateId: string, date: string, time?: string): Promise<ApiResponse<TodoResponse[]>> {
    return request(`/templates/${templateId}/apply${buildQueryString({ date, time })}`, {
      method: "POST",
    })
  },

  // ========== Type 模块 ==========

  // 创建类型
  async createType(data: TodoTypeRequest): Promise<ApiResponse<TodoTypeResponse>> {
    return request("/todo-types", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  // 获取用户所有类型
  async getTypes(): Promise<ApiResponse<TodoTypeResponse[]>> {
    return request("/todo-types", {
      method: "GET",
    })
  },

  // 根据ID查询类型
  async getTypeById(id: string): Promise<ApiResponse<TodoTypeResponse>> {
    return request(`/todo-types/${id}`, {
      method: "GET",
    })
  },

  // 更新类型
  async updateType(id: string, data: TodoTypeRequest): Promise<ApiResponse<TodoTypeResponse>> {
    return request(`/todo-types/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  // 删除类型
  async deleteType(id: string): Promise<ApiResponse<string>> {
    return request(`/todo-types/${id}`, {
      method: "DELETE",
    })
  },

  // ========== Statistics 模块 ==========

  // 月度统计
  async getMonthStatistics(yearMonth: string): Promise<ApiResponse<MonthStatisticsResponse>> {
    return request(`/statistics/month${buildQueryString({ yearMonth })}`, {
      method: "GET",
    })
  },

  // 类型统计
  async getTypeStatistics(yearMonth: string): Promise<ApiResponse<TypeStatisticsResponse[]>> {
    return request(`/statistics/type${buildQueryString({ yearMonth })}`, {
      method: "GET",
    })
  },

  // ========== File 模块 ==========

  // 文件上传
  async uploadFile(file: File, todoId?: string): Promise<ApiResponse<{
    fileId: string
    url: string
    fileName: string
    fileSize: number
    type: string
  }>> {
    const formData = new FormData()
    formData.append("file", file)
    
    const query = todoId ? buildQueryString({ todoId }) : ""
    return request(`/files/upload${query}`, {
      method: "POST",
      body: formData,
    })
  },

  // 文件读取（返回文件流）
  async getFile(fileId: string): Promise<Blob> {
    const token = getToken()
    const headers: Record<string, string> = {}
    
    if (token) {
      headers["BARCKE-TOKEN"] = token
    }

    const url = `${API_BASE_URL}/files/${fileId}`
    const response = await fetch(url, {
      method: "GET",
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "文件读取失败" }))
      throw new ApiError(error.message || "文件读取失败", response.status, error)
    }

    return response.blob()
  },
}

