// 项目配置文件
// NEXT_PUBLIC_BASE_PATH 会在构建时注入到代码中（客户端和服务端）
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const config = {
  // 后端 API 基础 URL（用于服务端直接调用或浏览器端直接调用）
  // 从环境变量读取，开发环境有默认值，生产环境必须配置
  backendApiBaseUrl:
    process.env.BACKEND_API_BASE_URL || "https://todo.barcke.com/api",
  // 前端 API 基础 URL（浏览器端直接使用后端地址，需要后端配置 CORS）
  // 在浏览器和服务端都直接使用后端 URL
  // 注意：使用此方案需要确保后端已正确配置 CORS 跨域支持
  apiBaseUrl:
    process.env.BACKEND_API_BASE_URL || "https://todo.barcke.com/api",
} as const

