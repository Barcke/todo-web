module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/web/calendar-design-and-interaction/lib/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 项目配置文件
// NEXT_PUBLIC_BASE_PATH 会在构建时注入到代码中（客户端和服务端）
__turbopack_context__.s([
    "config",
    ()=>config
]);
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
// 构建浏览器端 API 路径，包含 basePath
const buildApiBaseUrl = ()=>{
    const apiPath = "/api/proxy";
    if (BASE_PATH) {
        // 如果 basePath 存在，拼接路径（basePath 已包含前导 /）
        return `${BASE_PATH}${apiPath}`;
    }
    return apiPath;
};
const config = {
    // 后端 API 基础 URL（用于服务端直接调用或 Next.js API 代理）
    // 从环境变量读取，开发环境有默认值，生产环境必须配置
    backendApiBaseUrl: process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api",
    // 前端 API 基础 URL（通过 Next.js API 路由代理或 Nginx 代理）
    // 在浏览器中使用，自动包含 basePath（如果配置了子路径部署）
    // 在服务端直接使用后端 URL（静态导出模式下服务端代码不会运行）
    apiBaseUrl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : process.env.BACKEND_API_BASE_URL || "http://localhost:6158/api"
};
}),
"[project]/Desktop/web/calendar-design-and-interaction/app/api/proxy/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/lib/config.ts [app-route] (ecmascript)");
;
;
async function GET(request, { params }) {
    const { path } = await params;
    return proxyRequest(request, path, "GET");
}
async function POST(request, { params }) {
    const { path } = await params;
    return proxyRequest(request, path, "POST");
}
async function PUT(request, { params }) {
    const { path } = await params;
    return proxyRequest(request, path, "PUT");
}
async function DELETE(request, { params }) {
    const { path } = await params;
    return proxyRequest(request, path, "DELETE");
}
async function proxyRequest(request, path, method) {
    try {
        const pathString = path.join("/");
        // 获取查询参数
        const searchParams = request.nextUrl.searchParams.toString();
        // 构建完整的 URL，包含查询参数
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["config"].backendApiBaseUrl}/${pathString}${searchParams ? `?${searchParams}` : ""}`;
        console.log(`[Proxy] ${method} ${url}`);
        // 检查是否是文件上传请求
        const contentType = request.headers.get("content-type") || "";
        const isFileUpload = contentType.includes("multipart/form-data");
        // 获取请求体
        let body;
        if (method !== "GET" && method !== "DELETE") {
            if (isFileUpload) {
                // 文件上传：直接使用 FormData
                body = await request.formData();
            } else {
                // JSON 请求：转换为文本
                body = await request.text();
                console.log(`[Proxy] Request body:`, body);
            }
        }
        // 构建 headers
        const headers = {};
        // 如果不是文件上传，设置 Content-Type
        if (!isFileUpload && body) {
            headers["Content-Type"] = "application/json";
        }
        // 文件上传时不设置 Content-Type，让浏览器自动设置（包含 boundary）
        // 转发 BARCKE-TOKEN header（如果存在）
        const token = request.headers.get("BARCKE-TOKEN");
        if (token) {
            headers["BARCKE-TOKEN"] = token;
        }
        // 转发请求到后端
        const response = await fetch(url, {
            method,
            headers,
            body
        });
        console.log(`[Proxy] Response status: ${response.status}`);
        // 获取响应数据
        const data = await response.text();
        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch  {
            jsonData = data;
        }
        // 返回响应，保持状态码和 headers
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(jsonData, {
            status: response.status,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, BARCKE-TOKEN"
            }
        });
    } catch (error) {
        console.error("[Proxy] Error details:", {
            message: error?.message,
            stack: error?.stack,
            cause: error?.cause
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error?.message || "代理请求失败",
            error: ("TURBOPACK compile-time truthy", 1) ? String(error) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, BARCKE-TOKEN"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__186a4e13._.js.map