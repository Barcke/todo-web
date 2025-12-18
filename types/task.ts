// 后端返回的附件结构
export interface Attachment {
  attachmentId: string
  type: "image" | "voice" | "file"
  url: string
  previewUrl?: string
  fileName: string
  fileSize: number
  createdAt: string
}

// 后端返回的重复规则结构
export interface RepeatRule {
  type: "daily" | "weekly" | "monthly"
  days: number[] // 按周重复：周几的数组（1=周一，7=周日）；按月重复：每月的几号数组（1-31）
}

// 前端使用的重复配置（用于表单）
export interface RepeatConfig {
  enabled: boolean
  frequency: "daily" | "weekly" | "monthly"
  interval: number // 间隔（如每2天、每3周）
  endDate?: string
  count?: number
  daysOfWeek?: number[] // 每周的哪几天 (0=周日, 1=周一, ..., 6=周六)
  dayOfMonth?: number // 每月的哪一天
}

// 后端返回的 Todo 结构
export interface TodoResponse {
  id: string
  title: string
  description?: string
  date: string
  time?: string
  status: "pending" | "completed"
  typeId?: string
  typeName?: string
  typeIcon?: string
  source?: "normal" | "template"
  templateId?: string
  repeatType?: "none" | "daily" | "weekly" | "monthly"
  repeatRule?: RepeatRule
  attachments?: Attachment[]
  createdAt: string
  completedAt?: string
  updatedAt: string
}

// 前端使用的 Task 结构（兼容现有代码）
export interface Task {
  id: string
  title: string
  time: string
  completed: boolean
  date: string
  description?: string
  images?: string[] // Array of image URLs (兼容旧代码，新代码应使用 attachments)
  category?: string // 任务分类名称
  categoryIcon?: string // 分类图标
  categoryId?: string // 分类ID
  repeatConfig?: RepeatConfig // 重复配置（前端表单用）
  repeatType?: "none" | "daily" | "weekly" | "monthly" // 后端返回的重复类型
  repeatRule?: RepeatRule // 后端返回的重复规则
  attachments?: Attachment[] // 附件列表
  source?: "normal" | "template"
  templateId?: string
  parentId?: string // 如果是重复任务的子任务，记录父任务ID
  createdAt?: string
  completedAt?: string
  updatedAt?: string
}

// 后端返回的类型结构
export interface TodoTypeResponse {
  typeId: string
  typeName: string
  icon: string
  color?: string
  createdAt: string
}

// 前端使用的分类结构（兼容现有代码）
export interface TaskCategory {
  id: string // 对应后端的 typeId
  name: string // 对应后端的 typeName
  icon: string
  color?: string
}

// 后端返回的模板任务项结构
export interface TemplateTodoResponse {
  id: string
  title: string
  typeId?: string
  typeName?: string
  typeIcon?: string
  sortOrder: number
}

// 后端返回的模板结构
export interface TemplateResponse {
  templateId: string
  templateName: string
  description?: string
  todos: TemplateTodoResponse[]
  createdAt: string
  updatedAt: string
}

// 前端使用的模板结构（兼容现有代码）
export interface TaskTemplate {
  id: string // 对应后端的 templateId
  name: string // 对应后端的 templateName
  icon: string // 前端显示用的图标（后端没有，需要前端处理）
  description?: string
  tasks: Array<{
    id?: string // 对应后端的模板任务项 id
    title: string
    time: string // 前端显示用的时间（后端模板任务项没有时间）
    category?: string
    categoryIcon?: string
    categoryId?: string
    sortOrder?: number
  }>
}

// 日历日视图响应
export interface CalendarDayResponse {
  date: string
  totalCount: number
  completedCount: number
  completionRate: number
  completedTypeIcons: string[]
  hasUnfinished: boolean
}

// 月度统计响应
export interface MonthStatisticsResponse {
  month: string // 格式：yyyy-MM
  totalCount: number
  completedCount: number
  completionRate: number
}

// 类型统计响应
export interface TypeStatisticsResponse {
  month: string // 格式：yyyy-MM
  typeId: string
  typeName: string
  typeIcon: string
  completedCount: number
  pendingCount: number
}

// API 请求类型

// 创建 Todo 请求
export interface TodoCreateRequest {
  title: string
  description?: string
  date: string
  time?: string
  typeId?: string
  repeatType?: "none" | "daily" | "weekly" | "monthly"
  repeatRule?: RepeatRule
  attachmentIds?: string[]
}

// 更新 Todo 请求
export interface TodoUpdateRequest {
  title?: string
  description?: string
  date?: string
  time?: string
  typeId?: string
  repeatType?: "none" | "daily" | "weekly" | "monthly"
  repeatRule?: RepeatRule
  attachmentIds?: string[]
}

// 创建模板请求
export interface TemplateCreateRequest {
  templateName: string
  description?: string
}

// 创建类型请求
export interface TodoTypeRequest {
  typeName: string
  icon: string
  color?: string
}
