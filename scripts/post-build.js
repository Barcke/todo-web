#!/usr/bin/env node

/**
 * 构建后脚本：恢复 API 目录名称
 */

const fs = require('fs')
const path = require('path')

const apiDir = path.join(__dirname, '../app/api')
const apiDirBackup = path.join(__dirname, '../app/_api')

// 如果备份目录存在，恢复 API 目录
if (fs.existsSync(apiDirBackup)) {
  console.log('🔄 恢复 API 目录...')
  
  // 如果 API 目录已存在，先删除
  if (fs.existsSync(apiDir)) {
    fs.rmSync(apiDir, { recursive: true, force: true })
  }
  
  // 恢复 API 目录
  fs.renameSync(apiDirBackup, apiDir)
  console.log('✅ API 目录已恢复')
}

