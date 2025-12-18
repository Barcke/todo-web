"use client"

import { useState, useEffect } from "react"
import { X, Plus, Trash2 } from "lucide-react"
import type { TaskCategory } from "@/types/task"

interface CategoryManagerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  categories: TaskCategory[]
  onCreateCategory: (category: Omit<TaskCategory, "id">) => Promise<TaskCategory>
  onDeleteCategory: (id: string) => Promise<void>
  onSave?: () => void
}

// 常用图标列表
const COMMON_ICONS = [
  "💪",
  "⭐",
  "▶️",
  "✅",
  "🎯",
  "📚",
  "🏃",
  "🍎",
  "💼",
  "🎨",
  "🎵",
  "📱",
  "✈️",
  "🏠",
  "🛒",
  "💰",
  "🎓",
  "🧘",
  "🏋️",
  "🚴",
  "📝",
  "💡",
  "🎬",
  "🎮",
]

export function CategoryManager({ 
  open, 
  onOpenChange, 
  categories, 
  onCreateCategory,
  onDeleteCategory,
  onSave 
}: CategoryManagerProps) {
  const [newCategoryName, setNewCategoryName] = useState("")
  const [selectedIcon, setSelectedIcon] = useState("⭐")
  const [isCreating, setIsCreating] = useState(false)
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set())

  // 当组件打开时重置表单
  useEffect(() => {
    if (open) {
      setNewCategoryName("")
      setSelectedIcon("⭐")
    }
  }, [open])

  const handleAddCategory = async () => {
    if (!newCategoryName.trim() || isCreating) return

    setIsCreating(true)
    try {
      await onCreateCategory({
        name: newCategoryName.trim(),
        icon: selectedIcon,
      })
      setNewCategoryName("")
      setSelectedIcon("⭐")
    } catch (error) {
      // 错误已经在 hook 中处理了
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeleteCategory = async (id: string) => {
    if (deletingIds.has(id)) return

    setDeletingIds((prev) => new Set(prev).add(id))
    try {
      await onDeleteCategory(id)
    } catch (error) {
      // 错误已经在 hook 中处理了
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }
  }

  const handleSave = () => {
    if (onSave) {
      onSave()
    }
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl animate-slide-up pb-safe max-h-[85vh] overflow-y-auto">
        <div className="px-5 py-4 border-b border-border/40 sticky top-0 bg-background z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">管理分类</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-5 py-5 space-y-5">
          {/* 添加新分类 */}
          <div className="space-y-3 p-4 rounded-xl bg-muted/20 border border-border/40">
            <h3 className="text-sm font-medium">添加新分类</h3>

            <div>
              <label className="block text-xs font-medium mb-2">选择图标</label>
              <div className="flex flex-wrap gap-2">
                {COMMON_ICONS.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setSelectedIcon(icon)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all active:scale-95 ${
                      selectedIcon === icon
                        ? "bg-foreground text-background ring-2 ring-foreground ring-offset-2"
                        : "bg-background border border-border/40"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2">分类名称</label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newCategoryName.trim() && !isCreating) {
                    e.preventDefault()
                    handleAddCategory()
                  }
                }}
                placeholder="例如：运动、学习、工作"
                className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            <button
              onClick={handleAddCategory}
              disabled={!newCategoryName.trim() || isCreating}
              className="w-full py-2 rounded-lg bg-foreground text-background text-sm font-medium active:scale-[0.98] transition-transform disabled:opacity-40 flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              {isCreating ? "添加中..." : "添加分类"}
            </button>
          </div>

          {/* 现有分类列表 */}
          <div>
            <h3 className="text-sm font-medium mb-3">已有分类</h3>
            <div className="space-y-2">
              {categories.map((category) => {
                const isDeleting = deletingIds.has(category.id)
                return (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-border/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      disabled={isDeleting}
                      className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
              {categories.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">暂无分类，添加一个试试吧</p>
              )}
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3.5 rounded-xl bg-foreground text-background font-medium active:scale-[0.98] transition-transform"
          >
            完成
          </button>
        </div>
      </div>
    </>
  )
}
