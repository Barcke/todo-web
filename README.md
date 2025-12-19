# 日历设计与交互应用

一个功能丰富的现代化日历任务管理应用，基于 Next.js 和 React 构建，提供直观的任务管理和日程规划体验。

## ✨ 主要功能

### 📅 多视图日历
- **日视图**：查看单日任务列表，按时间排序
- **周视图**：查看一周的任务安排
- **月视图**：查看整月的任务概览，显示完成率和统计信息

### ✅ 任务管理
- 创建、编辑、删除任务
- 任务完成状态跟踪
- 任务分类和标签
- 任务重复设置（每日、每周、每月）
- 任务附件支持（图片、语音、文件）
- 任务描述和备注

### 🎯 分类与模板
- 自定义任务分类，支持图标和颜色
- 任务模板管理，快速创建常用任务组合
- 从模板快速创建任务

### 📊 数据统计
- 月度完成率统计
- 分类任务统计
- 可视化图表展示
- 连续完成成就系统

### 🤖 AI 助手
- 智能对话功能
- 任务建议和提醒

### 🎨 用户体验
- 深色/浅色主题切换
- 响应式设计，支持移动端
- 流畅的动画和交互
- Toast 通知系统
- 加载状态和错误处理

### 👤 用户系统
- 用户注册和登录
- 个人资料管理
- 密码修改
- 安全的身份认证

## 🛠️ 技术栈

### 前端框架
- **Next.js 16** - React 全栈框架
- **React 19** - UI 库
- **TypeScript** - 类型安全

### UI 组件库
- **Radix UI** - 无障碍组件基础
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 图标库
- **Sonner** - Toast 通知

### 状态管理与表单
- **React Hook Form** - 表单管理
- **Zod** - 数据验证
- **Context API** - 全局状态管理

### 日期处理
- **date-fns** - 日期工具库
- **react-day-picker** - 日期选择器

### 数据可视化
- **Recharts** - 图表库

### 其他工具
- **next-themes** - 主题切换
- **cmdk** - 命令面板
- **vaul** - 抽屉组件

## 📦 安装与运行

### 环境要求
- Node.js 18+ 
- pnpm (推荐) 或 npm/yarn

### 安装依赖

```bash
pnpm install
```

### 环境变量配置

#### 本地开发环境

创建 `.env.local` 文件（参考 `env.local.example`），配置后端 API 地址：

```env
# 前端部署的子路径（本地开发通常使用根路径，可以不设置）
NEXT_PUBLIC_BASE_PATH=

# 后端 API 地址
BACKEND_API_BASE_URL=http://localhost:6158/api
```

#### 生产环境

创建 `.env.production` 文件（参考 `env.production.example`），配置生产环境变量：

```env
# 前端部署的子路径（根路径部署则留空）
NEXT_PUBLIC_BASE_PATH=/todo-server

# 后端 API 完整地址
BACKEND_API_BASE_URL=https://todo-server.barcke.com/api
```

**环境变量说明：**
- `NEXT_PUBLIC_BASE_PATH`：前端部署的子路径，必须以 `/` 开头，不能以 `/` 结尾。根路径部署时设置为空字符串或不设置。
- `BACKEND_API_BASE_URL`：后端 API 完整地址，必须包含协议（http/https）和完整路径。

### 开发模式

```bash
pnpm dev
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
# 设置环境变量后构建
NEXT_PUBLIC_BASE_PATH=/todo-server \
BACKEND_API_BASE_URL=https://todo-server.barcke.com/api \
pnpm build
```

构建完成后，静态文件会输出到 `out` 目录。

### 生产部署

项目使用静态导出模式，需要通过 Nginx 等 Web 服务器部署。详细部署说明请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)。

**快速部署步骤：**
1. 配置环境变量并构建项目
2. 配置 Nginx（参考 `nginx.example.conf`）
3. 将 `out` 目录部署到服务器
4. 重启 Nginx 服务

### 启动生产服务器（仅用于测试）

```bash
pnpm start
```

注意：静态导出模式下，`pnpm start` 仅用于本地测试，生产环境应使用 Nginx 部署。

### 代码检查

```bash
pnpm lint
```

## 📁 项目结构

```
calendar-design-and-interaction/
├── app/                    # Next.js App Router 页面
│   ├── api/               # API 路由（代理后端请求）
│   ├── login/             # 登录页面
│   ├── register/          # 注册页面
│   ├── profile/           # 个人资料页面
│   ├── page.tsx           # 主日历页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/             # React 组件
│   ├── ui/                # 基础 UI 组件
│   ├── layout/            # 布局组件
│   ├── day-view.tsx       # 日视图组件
│   ├── week-view.tsx      # 周视图组件
│   ├── month-view.tsx     # 月视图组件
│   ├── add-task-sheet.tsx # 添加任务表单
│   ├── task-detail-sheet.tsx # 任务详情
│   ├── category-manager.tsx  # 分类管理
│   ├── template-manager.tsx  # 模板管理
│   ├── statistics-view.tsx   # 统计视图
│   └── ai-chat.tsx        # AI 聊天组件
├── hooks/                 # 自定义 React Hooks
│   ├── use-calendar.ts    # 日历数据管理
│   ├── use-todos.ts       # 任务管理
│   ├── use-categories.ts  # 分类管理
│   ├── use-templates.ts   # 模板管理
│   └── use-statistics.ts  # 统计数据
├── lib/                   # 工具库
│   ├── api-client.ts      # API 客户端
│   ├── auth-context.tsx   # 认证上下文
│   ├── config.ts          # 配置文件
│   ├── data-transform.ts  # 数据转换
│   └── utils.ts           # 工具函数
├── types/                 # TypeScript 类型定义
│   ├── task.ts            # 任务相关类型
│   └── user.ts            # 用户相关类型
└── public/                # 静态资源
```

## 🔌 API 集成

应用通过 Next.js API 路由代理后端请求，避免 CORS 问题。API 客户端位于 `lib/api-client.ts`，支持：

- 用户认证（登录、注册、登出）
- 任务 CRUD 操作
- 日历视图数据获取
- 分类和模板管理
- 统计数据获取
- AI 聊天接口

### API 代理配置

后端 API 请求通过 `/api/proxy/[...path]` 路由代理，配置在 `lib/config.ts` 中。

## 🎯 核心功能说明

### 任务创建
- 支持设置标题、描述、日期、时间
- 可选择分类和模板
- 支持重复任务设置
- 可上传附件（图片、语音、文件）

### 任务完成
- 点击任务可查看详情
- 完成任务后自动更新统计
- 连续完成 3 个任务会触发成就提示

### 视图切换
- 日视图：显示选中日期的所有任务
- 周视图：显示当周的任务（从周一开始）
- 月视图：显示整月的任务概览，包括完成率

### 分类管理
- 创建自定义分类
- 设置分类图标和颜色
- 删除分类（需确认）

### 模板管理
- 创建任务模板
- 模板包含多个任务项
- 从模板快速创建任务

## 🔒 认证与安全

- Token 存储在 localStorage
- API 请求自动携带认证 Token
- 路由保护（需要登录才能访问主页面）
- 密码加密传输

## 🎨 主题系统

应用支持深色和浅色主题，使用 `next-themes` 实现：
- 自动检测系统主题偏好
- 手动切换主题
- 主题持久化存储

## 📱 响应式设计

- 移动端优化的布局
- 触摸友好的交互
- 适配不同屏幕尺寸

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 Git 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量 `BACKEND_API_BASE_URL`
4. 部署完成

### 其他平台

应用可以部署到任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- 自托管服务器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目为私有项目。

## 📞 联系方式

如有问题或建议，请通过 Issue 反馈。

---

**注意**：本项目需要后端 API 服务支持。请确保后端服务正常运行，并正确配置 `BACKEND_API_BASE_URL` 环境变量。

