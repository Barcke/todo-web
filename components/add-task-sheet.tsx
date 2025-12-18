"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Mic, ImageIcon, BookTemplate as Template, Plus, Repeat, ChevronRight, ChevronDown } from "lucide-react"
import type { Task, TaskTemplate, TaskCategory, RepeatConfig } from "@/types/task"

// 格式化本地日期为 YYYY-MM-DD 格式（不使用UTC）
function formatLocalDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

interface AddTaskSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (task: Omit<Task, "id">) => void
  selectedDate: Date
  currentView: "day" | "week" | "month"
  templates: TaskTemplate[]
  categories: TaskCategory[]
  onManageTemplates: () => void
  onManageCategories: () => void
}

export function AddTaskSheet({
  open,
  onOpenChange,
  onAdd,
  selectedDate,
  currentView,
  templates,
  categories,
  onManageTemplates,
  onManageCategories,
}: AddTaskSheetProps) {
  // 获取应该使用的日期：周视图时使用今天，其他视图使用 selectedDate
  const getInitialDate = () => {
    if (currentView === "week") {
      return new Date()
    }
    return selectedDate
  }

  const initialDate = getInitialDate()
  const [mode, setMode] = useState<"single" | "template">("single")
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("09:00")
  const [date, setDate] = useState(formatLocalDate(initialDate))
  const [images, setImages] = useState<string[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [showRepeatConfig, setShowRepeatConfig] = useState(false)
  const [repeatConfig, setRepeatConfig] = useState<RepeatConfig>({
    enabled: false,
    frequency: "daily",
    interval: 1,
  })
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null)
  const [templateTime, setTemplateTime] = useState("09:00")
  const [templateDate, setTemplateDate] = useState(formatLocalDate(initialDate))

  // 当打开表单或视图/日期变化时，更新日期状态
  // 周视图时始终使用今天，其他视图使用 selectedDate
  useEffect(() => {
    if (open) {
      const targetDate = currentView === "week" ? new Date() : selectedDate
      setDate(formatLocalDate(targetDate))
      setTemplateDate(formatLocalDate(targetDate))
    }
  }, [open, currentView, selectedDate])
  const [editingTasks, setEditingTasks] = useState<
    { title: string; time: string; category?: string; categoryIcon?: string; categoryId?: string }[]
  >([])

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleVoiceInput = () => {
    if (!isRecording) {
      setIsRecording(true)
      // Simulated voice recognition - in production, use Web Speech API
      setTimeout(() => {
        setTitle("语音输入的任务示例")
        setIsRecording(false)
      }, 2000)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    const category = categories.find((c) => c.id === selectedCategory)
    onAdd({
      title: title.trim(),
      time,
      completed: false,
      date,
      images: images.length > 0 ? images : undefined,
      category: category?.name,
      categoryIcon: category?.icon,
      categoryId: selectedCategory || undefined,
      repeatConfig: repeatConfig.enabled ? repeatConfig : undefined,
    })

    // Reset form
    setTitle("")
    setTime("09:00")
    setImages([])
    setSelectedCategory("")
    setRepeatConfig({ enabled: false, frequency: "daily", interval: 1 })
    const targetDate = currentView === "week" ? new Date() : selectedDate
    setDate(formatLocalDate(targetDate))
  }

  const handleTemplateExpand = (template: TaskTemplate) => {
    if (expandedTemplate === template.id) {
      setExpandedTemplate(null)
      setSelectedTemplate(null)
      setEditingTasks([])
    } else {
      setExpandedTemplate(template.id)
      setSelectedTemplate(template.id)
      setEditingTasks(
        template.tasks.map((t) => ({ 
          ...t, 
          category: t.category, 
          categoryIcon: t.categoryIcon,
          categoryId: t.categoryId,
        })),
      )
    }
  }

  const handleTemplateSubmit = () => {
    if (!selectedTemplate) return

    // 确定使用的日期：日视图使用 date，周视图使用今天，其他视图使用 templateDate
    const targetDate = currentView === "day" ? date : currentView === "week" ? formatLocalDate(new Date()) : templateDate

    editingTasks.forEach((task) => {
      onAdd({
        title: task.title,
        time: currentView === "day" ? task.time : templateTime,
        completed: false,
        date: targetDate,
        images: undefined,
        category: task.category,
        categoryIcon: task.categoryIcon,
        categoryId: task.categoryId,
      })
    })

    onOpenChange(false)
    setExpandedTemplate(null)
    setSelectedTemplate(null)
    setEditingTasks([])
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl animate-slide-up pb-safe max-h-[85vh] overflow-y-auto">
        <div className="px-5 py-4 border-b border-border/40 sticky top-0 bg-background z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">添加待办</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex gap-2 mt-3">
            <button
              type="button"
              onClick={() => setMode("single")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 flex items-center justify-center gap-1.5 ${
                mode === "single" ? "bg-foreground text-background" : "bg-muted/40 text-muted-foreground"
              }`}
            >
              <Plus className="h-4 w-4" />
              单个任务
            </button>
            <button
              type="button"
              onClick={() => setMode("template")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 flex items-center justify-center gap-1.5 ${
                mode === "template" ? "bg-foreground text-background" : "bg-muted/40 text-muted-foreground"
              }`}
            >
              <Template className="h-4 w-4" />
              从模板
            </button>
          </div>
        </div>

        {mode === "single" ? (
          <form onSubmit={handleSubmit} className="px-5 py-5 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">任务名称</label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="输入任务名称"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleVoiceInput}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
                    isRecording ? "bg-red-500 text-white" : "bg-muted/50"
                  }`}
                >
                  <Mic className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium">任务分类</label>
                <button
                  type="button"
                  onClick={onManageCategories}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  管理分类
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-1.5 transition-all active:scale-95 ${
                      selectedCategory === category.id ? "bg-foreground text-background" : "bg-muted/40 text-foreground"
                    }`}
                  >
                    <span className="text-base">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {currentView !== "day" && (
              <div>
                <label className="block text-sm font-medium mb-2">日期</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">时间</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowRepeatConfig(!showRepeatConfig)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border/40 bg-background text-sm active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-2">
                  <Repeat className="h-4 w-4" />
                  <span>{repeatConfig.enabled ? "重复已启用" : "设置重复"}</span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-transform ${showRepeatConfig ? "rotate-90" : ""}`} />
              </button>

              {showRepeatConfig && (
                <div className="mt-3 space-y-3 p-4 rounded-xl bg-muted/20 border border-border/40">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={repeatConfig.enabled}
                      onChange={(e) => setRepeatConfig({ ...repeatConfig, enabled: e.target.checked })}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm">启用重复</span>
                  </label>

                  {repeatConfig.enabled && (
                    <>
                      <div>
                        <label className="block text-xs font-medium mb-1.5">重复频率</label>
                        <select
                          value={repeatConfig.frequency}
                          onChange={(e) => {
                            const newFrequency = e.target.value as "daily" | "weekly" | "monthly"
                            setRepeatConfig({
                              ...repeatConfig,
                              frequency: newFrequency,
                              interval: newFrequency === "daily" ? 1 : repeatConfig.interval,
                              daysOfWeek: newFrequency === "weekly" ? [] : undefined,
                              dayOfMonth: newFrequency === "monthly" ? undefined : undefined,
                            })
                          }}
                          className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                        >
                          <option value="daily">每天</option>
                          <option value="weekly">每周</option>
                          <option value="monthly">每月</option>
                        </select>
                      </div>

                      {repeatConfig.frequency !== "daily" && (
                        <div>
                          <label className="block text-xs font-medium mb-1.5">
                            间隔（每 {repeatConfig.frequency === "weekly" ? "几周" : "几月"}）
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={repeatConfig.interval}
                            onChange={(e) => setRepeatConfig({ ...repeatConfig, interval: Number(e.target.value) })}
                            className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                          />
                        </div>
                      )}

                      {repeatConfig.frequency === "weekly" && (
                        <div>
                          <label className="block text-xs font-medium mb-1.5">选择重复日期</label>
                          <div className="grid grid-cols-7 gap-1">
                            {["日", "一", "二", "三", "四", "五", "六"].map((day, idx) => {
                              const isSelected = repeatConfig.daysOfWeek?.includes(idx) || false
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    const current = repeatConfig.daysOfWeek || []
                                    const newDays = isSelected
                                      ? current.filter((d) => d !== idx)
                                      : [...current, idx].sort()
                                    setRepeatConfig({ ...repeatConfig, daysOfWeek: newDays })
                                  }}
                                  className={`py-2 rounded-lg text-xs font-medium transition-all active:scale-95 ${
                                    isSelected ? "bg-foreground text-background" : "bg-muted/40 text-muted-foreground"
                                  }`}
                                >
                                  {day}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {repeatConfig.frequency === "monthly" && (
                        <div>
                          <label className="block text-xs font-medium mb-1.5">选择每月的哪一天</label>
                          <input
                            type="number"
                            min="1"
                            max="31"
                            value={repeatConfig.dayOfMonth || ""}
                            onChange={(e) =>
                              setRepeatConfig({
                                ...repeatConfig,
                                dayOfMonth: e.target.value ? Number(e.target.value) : undefined,
                              })
                            }
                            placeholder="例如: 15 (每月15号)"
                            className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-medium mb-1.5">重复次数（可选）</label>
                        <input
                          type="number"
                          min="1"
                          value={repeatConfig.count || ""}
                          onChange={(e) =>
                            setRepeatConfig({
                              ...repeatConfig,
                              count: e.target.value ? Number(e.target.value) : undefined,
                            })
                          }
                          placeholder="不限制"
                          className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium mb-1.5">结束日期（可选）</label>
                        <input
                          type="date"
                          value={repeatConfig.endDate || ""}
                          onChange={(e) => setRepeatConfig({ ...repeatConfig, endDate: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">图片附件</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 rounded-xl border border-dashed border-border/40 bg-muted/20 text-sm text-muted-foreground flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              >
                <ImageIcon className="h-4 w-4" />
                添加图片
              </button>
              {images.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border/40">
                      <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setImages((prev) => prev.filter((_, i) => i !== idx))}
                        className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!title.trim()}
              className="w-full py-3.5 rounded-xl bg-foreground text-background font-medium active:scale-[0.98] transition-transform disabled:opacity-40 disabled:active:scale-100"
            >
              添加
            </button>
          </form>
        ) : (
          <div className="px-5 py-5 space-y-4">
            <div className="space-y-3">
              {templates.map((template) => (
                <div key={template.id} className="rounded-xl border border-border/40 bg-muted/20 overflow-hidden">
                  <button
                    onClick={() => handleTemplateExpand(template)}
                    className="w-full p-4 flex items-center gap-3 active:bg-muted/30 transition-all text-left"
                  >
                    {expandedTemplate === template.id ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <div className="text-2xl">{template.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{template.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{template.tasks.length} 项任务</div>
                    </div>
                  </button>

                  {expandedTemplate === template.id && (
                    <div className="px-4 pb-4 space-y-3">
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {editingTasks.map((task, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm bg-background/50 rounded-lg p-2.5">
                            <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center text-xs text-muted-foreground flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                value={task.title}
                                onChange={(e) => {
                                  const newTasks = [...editingTasks]
                                  newTasks[idx].title = e.target.value
                                  setEditingTasks(newTasks)
                                }}
                                className="w-full bg-transparent border-none outline-none font-medium text-sm"
                              />
                              {task.category && (
                                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                  {task.categoryIcon && <span>{task.categoryIcon}</span>}
                                  <span>{task.category}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-border/30 space-y-3">
                        <div className="text-xs font-medium text-muted-foreground">为所有任务设置时间</div>

                        {currentView !== "day" && (
                          <div>
                            <label className="block text-xs font-medium mb-1.5">日期</label>
                            <input
                              type="date"
                              value={templateDate}
                              onChange={(e) => setTemplateDate(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-xs font-medium mb-1.5">时间</label>
                          <input
                            type="time"
                            value={templateTime}
                            onChange={(e) => setTemplateTime(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-border/40 bg-background text-sm"
                          />
                        </div>

                        <button
                          onClick={handleTemplateSubmit}
                          className="w-full py-2.5 rounded-lg bg-foreground text-background text-sm font-medium active:scale-95 transition-transform"
                        >
                          添加 {editingTasks.length} 个任务
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={onManageTemplates}
              className="w-full py-3 rounded-xl border border-dashed border-border/40 bg-muted/20 text-sm font-medium text-muted-foreground active:scale-[0.98] transition-transform"
            >
              管理模板
            </button>
          </div>
        )}
      </div>
    </>
  )
}
