// 项目配置文件
// NEXT_PUBLIC_BASE_PATH 会在构建时注入到代码中（客户端和服务端）
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

// 构建浏览器端 API 路径，包含 basePath
const buildApiBaseUrl = (): string => {
  const apiPath = "/api/proxy"
  if (BASE_PATH) {
    // 如果 basePath 存在，拼接路径（basePath 已包含前导 /）
    return `${BASE_PATH}${apiPath}`
  }
  return apiPath
}

export const config = {
  // 后端 API 基础 URL（用于服务端直接调用或 Next.js API 代理）
  // 从环境变量读取，开发环境有默认值，生产环境必须配置
  backendApiBaseUrl:
    process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api",
  // 前端 API 基础 URL（通过 Next.js API 路由代理或 Nginx 代理）
  // 在浏览器中使用，自动包含 basePath（如果配置了子路径部署）
  // 在服务端直接使用后端 URL（静态导出模式下服务端代码不会运行）
  apiBaseUrl:
    typeof window !== "undefined"
      ? buildApiBaseUrl()
      : process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api",
} as const

