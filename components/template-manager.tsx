"use client"

import { useState, useEffect } from "react"
import { X, Plus, Edit2, Trash2, ChevronDown, ChevronRight } from "lucide-react"
import type { TaskTemplate, TaskCategory } from "@/types/task"
import { useTemplates } from "@/hooks/use-templates"

interface TemplateManagerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  templates: TaskTemplate[]
  categories: TaskCategory[]
  onSave: (templates: TaskTemplate[]) => void
}

export function TemplateManager({ open, onOpenChange, templates, categories, onSave }: TemplateManagerProps) {
  const {
    createTemplate,
    updateTemplate,
    deleteTemplate,
    addTemplateTodo,
    updateTemplateTodo,
    deleteTemplateTodo,
    refresh,
  } = useTemplates()

  const [localTemplates, setLocalTemplates] = useState<TaskTemplate[]>(templates)
  const [editing, setEditing] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editIcon, setEditIcon] = useState("")
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null)
  const [editingTasks, setEditingTasks] = useState<
    Array<{ id?: string; title: string; time: string; category?: string; categoryIcon?: string; categoryId?: string }>
  >([])
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  // 当 templates prop 变化时，更新本地状态
  useEffect(() => {
    setLocalTemplates(templates)
  }, [templates])

  const handleAddTemplate = async () => {
    try {
      setSaving(true)
      const newTemplate = await createTemplate({
        name: "新模板",
        icon: "📝",
        description: "",
      })
      setLocalTemplates([...localTemplates, newTemplate])
      onSave([]) // 通知父组件刷新
      setEditing(newTemplate.id)
      setEditName(newTemplate.name)
      setEditIcon(newTemplate.icon)
    } catch (error) {
      console.error("创建模板失败:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleSaveEdit = async (id: string) => {
    if (!editName.trim()) {
      return
    }
    try {
      setSaving(true)
      const template = localTemplates.find((t) => t.id === id)
      if (!template) return

      await updateTemplate(id, {
        name: editName,
        icon: editIcon,
        description: template.description,
      })
      await refresh()
      onSave([]) // 通知父组件刷新
      setEditing(null)
    } catch (error) {
      console.error("更新模板失败:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteTemplate = async (id: string) => {
    if (!confirm("确定要删除这个模板吗？")) {
      return
    }
    try {
      setSaving(true)
      await deleteTemplate(id)
      setLocalTemplates((prev) => prev.filter((t) => t.id !== id))
      onSave([]) // 通知父组件刷新
    } catch (error) {
      console.error("删除模板失败:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleEditTasks = (template: TaskTemplate) => {
    setEditingTemplateId(template.id)
    setEditingTasks(
      template.tasks.map((task) => ({
        id: task.id,
        title: task.title,
        time: task.time,
        category: task.category,
        categoryIcon: task.categoryIcon,
        categoryId: task.categoryId,
      }))
    )
  }

  const handleSaveEditedTasks = async () => {
    if (!editingTemplateId) return

    const template = localTemplates.find((t) => t.id === editingTemplateId)
    if (!template) return

    try {
      setSaving(true)

      // 获取原始任务列表
      const originalTasks = template.tasks

      // 找出需要删除的任务（在原始列表中但不在新列表中）
      const tasksToDelete = originalTasks.filter(
        (originalTask) => originalTask.id && !editingTasks.find((task) => task.id === originalTask.id)
      )

      // 找出需要添加的任务（在新列表中但没有 id）
      const tasksToAdd = editingTasks.filter((task) => !task.id)

      // 找出需要更新的任务（在新列表中有 id 但内容有变化）
      const tasksToUpdate = editingTasks.filter((task) => {
        if (!task.id) return false
        const originalTask = originalTasks.find((t) => t.id === task.id)
        if (!originalTask) return false
        return (
          originalTask.title !== task.title ||
          originalTask.categoryId !== task.categoryId
        )
      })

      // 执行删除操作
      for (const task of tasksToDelete) {
        if (task.id) {
          await deleteTemplateTodo(editingTemplateId, task.id)
        }
      }

      // 执行添加操作
      for (const task of tasksToAdd) {
        await addTemplateTodo(editingTemplateId, task.title, task.categoryId)
      }

      // 执行更新操作
      for (const task of tasksToUpdate) {
        if (task.id) {
          await updateTemplateTodo(editingTemplateId, task.id, {
            title: task.title,
            typeId: task.categoryId,
          })
        }
      }

      // 刷新模板列表
      await refresh()
      onSave([]) // 通知父组件刷新
      setEditingTemplateId(null)
      setEditingTasks([])
    } catch (error) {
      console.error("保存模板项失败:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleAddTaskToTemplate = () => {
    setEditingTasks([...editingTasks, { title: "新任务", time: "09:00" }])
  }

  const handleDeleteTaskFromTemplate = (index: number) => {
    setEditingTasks((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpdateTask = (index: number, field: "title" | "time" | "category", value: string) => {
    setEditingTasks((prev) => {
      const newTasks = [...prev]
      if (field === "category") {
        const category = categories.find((c) => c.id === value)
        newTasks[index] = {
          ...newTasks[index],
          category: category?.name,
          categoryIcon: category?.icon,
          categoryId: category?.id,
        }
      } else {
        newTasks[index] = { ...newTasks[index], [field]: value }
      }
      return newTasks
    })
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      await refresh()
      onSave([]) // 通知父组件刷新
      onOpenChange(false)
    } catch (error) {
      console.error("刷新模板列表失败:", error)
    } finally {
      setSaving(false)
    }
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl animate-slide-up pb-safe max-h-[85vh] overflow-y-auto">
        <div className="px-5 py-4 border-b border-border/40 sticky top-0 bg-background z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">管理模板</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-5 py-5 space-y-3">
          {localTemplates.map((template) => (
            <div key={template.id} className="rounded-xl border border-border/40 bg-muted/20 overflow-hidden">
              <div className="p-4">
                {editing === template.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editIcon}
                      onChange={(e) => setEditIcon(e.target.value)}
                      placeholder="图标 (emoji)"
                      className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                    />
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="模板名称"
                      className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                    />
                    <button
                      onClick={() => handleSaveEdit(template.id)}
                      disabled={saving || !editName.trim()}
                      className="w-full py-2 rounded-lg bg-foreground text-background text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {saving ? "保存中..." : "保存"}
                    </button>
                  </div>
                ) : editingTemplateId === template.id ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-2xl">{template.icon}</div>
                      <div className="flex-1 font-medium">{template.name}</div>
                      <button
                        onClick={handleSaveEditedTasks}
                        disabled={saving}
                        className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {saving ? "保存中..." : "保存修改"}
                      </button>
                    </div>

                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {editingTasks.map((task, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/30 space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="flex-1 space-y-2">
                              <input
                                type="text"
                                value={task.title}
                                onChange={(e) => handleUpdateTask(idx, "title", e.target.value)}
                                placeholder="任务名称"
                                className="w-full px-2 py-1.5 rounded border border-border/40 bg-background text-sm"
                              />
                              <input
                                type="time"
                                value={task.time}
                                onChange={(e) => handleUpdateTask(idx, "time", e.target.value)}
                                className="w-full px-2 py-1.5 rounded border border-border/40 bg-background text-sm"
                              />
                              <select
                                value={categories.find((c) => c.name === task.category)?.id || ""}
                                onChange={(e) => handleUpdateTask(idx, "category", e.target.value)}
                                className="w-full px-2 py-1.5 rounded border border-border/40 bg-background text-sm"
                              >
                                <option value="">无分类</option>
                                {categories.map((cat) => (
                                  <option key={cat.id} value={cat.id}>
                                    {cat.icon} {cat.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button
                              onClick={() => handleDeleteTaskFromTemplate(idx)}
                              className="w-7 h-7 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center active:scale-95 transition-transform"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleAddTaskToTemplate}
                      className="w-full py-2.5 rounded-lg border border-dashed border-border/40 bg-muted/20 text-sm text-muted-foreground active:scale-95 transition-transform flex items-center justify-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      添加任务项
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => setExpandedTemplate(expandedTemplate === template.id ? null : template.id)}
                        className="mt-1 active:scale-95 transition-transform"
                      >
                        {expandedTemplate === template.id ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                      <div className="text-2xl">{template.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{template.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{template.tasks.length} 项任务</div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditTasks(template)}
                          className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center active:scale-95 transition-transform"
                          title="编辑任务"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEditing(template.id)
                            setEditName(template.name)
                            setEditIcon(template.icon)
                          }}
                          className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center active:scale-95 transition-transform"
                          title="编辑名称"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTemplate(template.id)}
                          disabled={saving}
                          className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                          title="删除模板"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {expandedTemplate === template.id && template.tasks.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
                        {template.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm bg-background/50 rounded-lg p-2.5">
                            <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center text-xs text-muted-foreground flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5">
                                {task.categoryIcon && <span className="text-sm">{task.categoryIcon}</span>}
                                <span className="font-medium">{task.title}</span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                                <span>{task.time}</span>
                                {task.category && <span>· {task.category}</span>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={handleAddTemplate}
            disabled={saving}
            className="w-full py-3 rounded-xl border border-dashed border-border/40 bg-muted/20 text-sm font-medium text-muted-foreground active:scale-[0.98] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
            {saving ? "创建中..." : "添加新模板"}
          </button>
        </div>

        <div className="px-5 pb-5">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3.5 rounded-xl bg-foreground text-background font-medium active:scale-[0.98] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            完成
          </button>
        </div>
      </div>
    </>
  )
}
