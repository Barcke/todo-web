module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Desktop/web/calendar-design-and-interaction/components/toast-notifications.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastNotifications",
    ()=>ToastNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ToastNotifications() {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleToast = (event)=>{
            const id = Math.random().toString(36).substring(7);
            const newToast = {
                id,
                message: event.detail.message,
                type: event.detail.type
            };
            setToasts((prev)=>[
                    ...prev,
                    newToast
                ]);
            setTimeout(()=>{
                setToasts((prev)=>prev.filter((t)=>t.id !== id));
            }, 3000);
        };
        window.addEventListener("show-toast", handleToast);
        return ()=>window.removeEventListener("show-toast", handleToast);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 space-y-2 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-sm animate-in slide-in-from-top fade-in duration-300 ${toast.type === "achievement" ? "bg-foreground text-background" : "bg-background/95 text-foreground border border-border/40"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: toast.message
                }, void 0, false, {
                    fileName: "[project]/Desktop/web/calendar-design-and-interaction/components/toast-notifications.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, toast.id, false, {
                fileName: "[project]/Desktop/web/calendar-design-and-interaction/components/toast-notifications.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/web/calendar-design-and-interaction/components/toast-notifications.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/web/calendar-design-and-interaction/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 项目配置文件
__turbopack_context__.s([
    "config",
    ()=>config
]);
const config = {
    // 后端 API 基础 URL（用于 Next.js API 代理）
    backendApiBaseUrl: "http://localhost:6158/api",
    // 前端 API 基础 URL（通过 Next.js API 路由代理）
    // 在浏览器中使用相对路径，避免 CORS 问题
    apiBaseUrl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http://localhost:6158/api"
};
}),
"[project]/Desktop/web/calendar-design-and-interaction/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "apiClient",
    ()=>apiClient,
    "clearToken",
    ()=>clearToken,
    "getToken",
    ()=>getToken,
    "setToken",
    ()=>setToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/lib/config.ts [app-ssr] (ecmascript)");
;
// 在浏览器中使用代理路径，在服务端直接使用后端 URL
const API_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].backendApiBaseUrl;
// Token 存储键名
const TOKEN_KEY = "barcke_token";
function getToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setToken(token) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function clearToken() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
class ApiError extends Error {
    status;
    response;
    constructor(message, status, response){
        super(message), this.status = status, this.response = response;
        this.name = "ApiError";
    }
}
// 统一的请求方法
async function request(endpoint, options = {}) {
    const token = getToken();
    const headers = {
        ...options.headers
    };
    // 如果不是 FormData，设置 Content-Type
    if (!(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }
    // 如果有 token，添加认证 header
    if (token) {
        headers["BARCKE-TOKEN"] = token;
    }
    const url = `${API_BASE_URL}${endpoint}`;
    try {
        const response = await fetch(url, {
            ...options,
            headers
        });
        const data = await response.json();
        if (!response.ok) {
            throw new ApiError(data.message || "请求失败", response.status, data);
        }
        return data;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError("网络错误，请检查网络连接", 0, error);
    }
}
// 构建查询字符串
function buildQueryString(params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value])=>{
        if (value !== undefined && value !== null && value !== "") {
            searchParams.append(key, value);
        }
    });
    const query = searchParams.toString();
    return query ? `?${query}` : "";
}
const apiClient = {
    // 用户注册
    async register (data) {
        return request("/auth/register", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    // 用户登录
    async login (data) {
        return request("/auth/login", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    // 用户登出
    async logout () {
        return request("/auth/logout", {
            method: "POST"
        });
    },
    // 获取当前用户信息
    async getProfile () {
        return request("/user/profile", {
            method: "GET"
        });
    },
    // 更新用户信息
    async updateProfile (data) {
        return request("/user/profile", {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },
    // 修改密码
    async changePassword (data) {
        return request("/user/password", {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },
    // ========== Todo 模块 ==========
    // 创建 Todo
    async createTodo (data) {
        return request("/todos", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    // 查询 Todo 列表
    async getTodos (params) {
        const query = buildQueryString({
            startDate: params?.startDate,
            endDate: params?.endDate,
            status: params?.status
        });
        return request(`/todos${query}`, {
            method: "GET"
        });
    },
    // 获取 Todo 详情
    async getTodoById (id) {
        return request(`/todos/${id}`, {
            method: "GET"
        });
    },
    // 更新 Todo
    async updateTodo (id, data) {
        return request(`/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },
    // 删除 Todo
    async deleteTodo (id) {
        return request(`/todos/${id}`, {
            method: "DELETE"
        });
    },
    // 标记完成
    async completeTodo (id) {
        return request(`/todos/${id}/complete`, {
            method: "POST"
        });
    },
    // ========== Calendar 模块 ==========
    // 获取月视图数据
    async getMonthView (yearMonth) {
        return request(`/calendar/month${buildQueryString({
            yearMonth
        })}`, {
            method: "GET"
        });
    },
    // 获取日视图数据
    async getDayView (date) {
        return request(`/calendar/day${buildQueryString({
            date
        })}`, {
            method: "GET"
        });
    },
    // 获取周视图数据
    async getWeekView (weekStartDate) {
        return request(`/calendar/week${buildQueryString({
            weekStartDate
        })}`, {
            method: "GET"
        });
    },
    // ========== Template 模块 ==========
    // 创建模板
    async createTemplate (data) {
        return request("/templates", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    // 获取模板列表
    async getTemplates () {
        return request("/templates", {
            method: "GET"
        });
    },
    // 获取模板详情
    async getTemplateById (id) {
        return request(`/templates/${id}`, {
            method: "GET"
        });
    },
    // 更新模板
    async updateTemplate (id, data) {
        return request(`/templates/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },
    // 删除模板
    async deleteTemplate (id) {
        return request(`/templates/${id}`, {
            method: "DELETE"
        });
    },
    // 添加模板项
    async addTemplateTodo (templateId, title, typeId) {
        return request(`/templates/${templateId}/todos${buildQueryString({
            title,
            typeId
        })}`, {
            method: "POST"
        });
    },
    // 更新模板项
    async updateTemplateTodo (templateId, todoId, params) {
        return request(`/templates/${templateId}/todos/${todoId}${buildQueryString(params || {})}`, {
            method: "PUT"
        });
    },
    // 删除模板项
    async deleteTemplateTodo (templateId, todoId) {
        return request(`/templates/${templateId}/todos/${todoId}`, {
            method: "DELETE"
        });
    },
    // 应用模板生成 Todo
    async applyTemplate (templateId, date, time) {
        return request(`/templates/${templateId}/apply${buildQueryString({
            date,
            time
        })}`, {
            method: "POST"
        });
    },
    // ========== Type 模块 ==========
    // 创建类型
    async createType (data) {
        return request("/todo-types", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    // 获取用户所有类型
    async getTypes () {
        return request("/todo-types", {
            method: "GET"
        });
    },
    // 根据ID查询类型
    async getTypeById (id) {
        return request(`/todo-types/${id}`, {
            method: "GET"
        });
    },
    // 更新类型
    async updateType (id, data) {
        return request(`/todo-types/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },
    // 删除类型
    async deleteType (id) {
        return request(`/todo-types/${id}`, {
            method: "DELETE"
        });
    },
    // ========== Statistics 模块 ==========
    // 月度统计
    async getMonthStatistics (yearMonth) {
        return request(`/statistics/month${buildQueryString({
            yearMonth
        })}`, {
            method: "GET"
        });
    },
    // 类型统计
    async getTypeStatistics (yearMonth) {
        return request(`/statistics/type${buildQueryString({
            yearMonth
        })}`, {
            method: "GET"
        });
    },
    // ========== File 模块 ==========
    // 文件上传
    async uploadFile (file, todoId) {
        const formData = new FormData();
        formData.append("file", file);
        const query = todoId ? buildQueryString({
            todoId
        }) : "";
        return request(`/files/upload${query}`, {
            method: "POST",
            body: formData
        });
    },
    // 文件读取（返回文件流）
    async getFile (fileId) {
        const token = getToken();
        const headers = {};
        if (token) {
            headers["BARCKE-TOKEN"] = token;
        }
        const url = `${API_BASE_URL}/files/${fileId}`;
        const response = await fetch(url, {
            method: "GET",
            headers
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    message: "文件读取失败"
                }));
            throw new ApiError(error.message || "文件读取失败", response.status, error);
        }
        return response.blob();
    }
};
}),
"[project]/Desktop/web/calendar-design-and-interaction/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/lib/api-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // 初始化时检查是否有 token 并获取用户信息
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAuth = async ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])();
            if (token) {
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getProfile();
                    setUser(response.data);
                } catch (error) {
                    // Token 无效，清除
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
                }
            }
            setLoading(false);
        };
        initAuth();
    }, []);
    // 登录
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].login(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setToken"])(response.data.token);
        setUser(response.data.user);
    }, []);
    // 注册
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].register(data);
        // 注册成功后自动登录
        await login(data);
    }, [
        login
    ]);
    // 登出
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].logout();
        } catch (error) {
        // 即使登出失败也清除本地状态
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
            setUser(null);
            router.push("/login");
        }
    }, [
        router
    ]);
    // 更新用户信息
    const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].updateProfile(data);
        setUser(response.data);
    }, []);
    // 修改密码
    const changePassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].changePassword(data);
    }, []);
    // 刷新用户信息
    const refreshUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getProfile();
            setUser(response.data);
        } catch (error) {
            // 如果获取失败，清除状态
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
            setUser(null);
        }
    }, []);
    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
        refreshUser
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/web/calendar-design-and-interaction/lib/auth-context.tsx",
        lineNumber: 108,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/Desktop/web/calendar-design-and-interaction/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/web/calendar-design-and-interaction/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$web$2f$calendar$2d$design$2d$and$2d$interaction$2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)'
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/web/calendar-design-and-interaction/components/ui/sonner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cf346037._.js.map