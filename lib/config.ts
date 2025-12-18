// 项目配置文件
export const config = {
  // 后端 API 基础 URL（用于 Next.js API 代理）
  // 从环境变量读取，如果没有则使用默认值
  backendApiBaseUrl: process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api",
  // 前端 API 基础 URL（通过 Next.js API 路由代理）
  // 在浏览器中使用相对路径，避免 CORS 问题
  apiBaseUrl: typeof window !== "undefined" ? "/api/proxy" : (process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api"),
} as const

