#!/usr/bin/env node

/**
 * 构建前脚本：临时重命名 API 目录以支持静态导出
 * Next.js 静态导出不支持 API 路由，生产环境通过 Nginx 代理处理 API 请求
 */

const fs = require('fs')
const path = require('path')

const apiDir = path.join(__dirname, '../app/api')
const apiDirBackup = path.join(__dirname, '../app/_api')

// 始终执行（因为 next build 默认是生产构建）
if (fs.existsSync(apiDir)) {
  console.log('📦 生产构建：临时重命名 API 目录以支持静态导出...')
  
  // 如果备份目录已存在，先删除
  if (fs.existsSync(apiDirBackup)) {
    fs.rmSync(apiDirBackup, { recursive: true, force: true })
  }
  
  // 重命名 API 目录
  fs.renameSync(apiDir, apiDirBackup)
  console.log('✅ API 目录已重命名为 _api（构建完成后会自动恢复）')
}

