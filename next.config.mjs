/** @type {import('next').NextConfig} */
// 从环境变量读取 basePath，如果未设置则默认为空字符串（支持根路径部署）
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 配置子路径部署，支持通过环境变量动态设置
  basePath: basePath,
  // 静态资源前缀与 basePath 保持一致
  assetPrefix: basePath,
  // 静态导出配置
  output: "export",
}

export default nextConfig
