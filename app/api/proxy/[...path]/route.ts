import { NextRequest, NextResponse } from "next/server"
import { config } from "@/lib/config"

// 注意：在静态导出模式下，此 API 路由在构建时会被排除
// 生产环境的 API 请求通过 Nginx 代理处理

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return proxyRequest(request, path, "GET")
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return proxyRequest(request, path, "POST")
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return proxyRequest(request, path, "PUT")
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return proxyRequest(request, path, "DELETE")
}

async function proxyRequest(
  request: NextRequest,
  path: string[],
  method: string
) {
  try {
    const pathString = path.join("/")
    // 获取查询参数
    const searchParams = request.nextUrl.searchParams.toString()
    // 构建完整的 URL，包含查询参数
    const url = `${config.backendApiBaseUrl}/${pathString}${searchParams ? `?${searchParams}` : ""}`
    
    console.log(`[Proxy] ${method} ${url}`)
    
    // 检查是否是文件上传请求
    const contentType = request.headers.get("content-type") || ""
    const isFileUpload = contentType.includes("multipart/form-data")
    
    // 获取请求体
    let body: BodyInit | undefined
    if (method !== "GET" && method !== "DELETE") {
      if (isFileUpload) {
        // 文件上传：直接使用 FormData
        body = await request.formData()
      } else {
        // JSON 请求：转换为文本
        body = await request.text()
        console.log(`[Proxy] Request body:`, body)
      }
    }

    // 构建 headers
    const headers: Record<string, string> = {}
    
    // 如果不是文件上传，设置 Content-Type
    if (!isFileUpload && body) {
      headers["Content-Type"] = "application/json"
    }
    // 文件上传时不设置 Content-Type，让浏览器自动设置（包含 boundary）
    
    // 转发 BARCKE-TOKEN header（如果存在）
    const token = request.headers.get("BARCKE-TOKEN")
    if (token) {
      headers["BARCKE-TOKEN"] = token
    }

    // 转发请求到后端
    const response = await fetch(url, {
      method,
      headers,
      body,
    })

    console.log(`[Proxy] Response status: ${response.status}`)

    // 获取响应数据
    const data = await response.text()
    let jsonData: any
    try {
      jsonData = JSON.parse(data)
    } catch {
      jsonData = data
    }

    // 返回响应，保持状态码和 headers
    return NextResponse.json(jsonData, {
      status: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, BARCKE-TOKEN",
      },
    })
  } catch (error: any) {
    console.error("[Proxy] Error details:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
    })
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "代理请求失败",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}

// 处理 OPTIONS 预检请求
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, BARCKE-TOKEN",
    },
  })
}

