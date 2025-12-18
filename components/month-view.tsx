"use client"

import type { Task, TaskCategory, CalendarDayResponse } from "@/types/task"
import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, ListTodo } from "lucide-react"

interface MonthViewProps {
  tasks?: Task[] // 可选，用于兼容旧代码
  monthData?: CalendarDayResponse[] // 后端返回的月视图数据
  selectedDate: Date
  onDateClick: (date: Date) => void
  onMonthChange?: (date: Date) => void
  categories?: TaskCategory[]
}

// 格式化日期为本地日期字符串（避免时区问题）
function formatDateLocal(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function MonthView({ tasks = [], monthData, selectedDate, onDateClick, onMonthChange, categories = [] }: MonthViewProps) {
  const [showIncompleteModal, setShowIncompleteModal] = useState(false)

  // 创建日期到月视图数据的映射
  const monthDataMap = useMemo(() => {
    if (!monthData) return new Map<string, CalendarDayResponse>()
    const map = new Map<string, CalendarDayResponse>()
    monthData.forEach((day) => {
      map.set(day.date, day)
    })
    return map
  }, [monthData])

  const { calendarDays, stats, incompleteTasks } = useMemo(() => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const firstDayOfWeek = firstDay.getDay()
    const startDate = new Date(firstDay)
    startDate.setDate(1 - (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1))

    const days = []
    const currentDate = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // 如果有后端数据，使用后端数据；否则使用 tasks
    let total = 0
    let completed = 0
    const incomplete: Task[] = []

    if (monthData && monthData.length > 0) {
      // 使用后端返回的数据
      monthData.forEach((day) => {
        total += day.totalCount
        completed += day.completedCount
        if (day.hasUnfinished) {
          // 从 tasks 中找到未完成的任务
          const dayTasks = tasks.filter((t) => t.date === day.date && !t.completed)
          incomplete.push(...dayTasks)
        }
      })
    } else {
      // 使用 tasks 数据（兼容旧代码）
      const monthDates = days.filter((d) => d.getMonth() === month).map((d) => formatDateLocal(d))
      const monthTasks = tasks.filter((t) => monthDates.includes(t.date))
      total = monthTasks.length
      completed = monthTasks.filter((t) => t.completed).length
      incomplete.push(...monthTasks.filter((t) => !t.completed))
    }

    return {
      calendarDays: days,
      stats: { total, completed },
      incompleteTasks: incomplete,
    }
  }, [selectedDate, tasks, monthData])

  const getTaskStatsForDay = (date: Date) => {
    const dateStr = formatDateLocal(date)
    
    // 优先使用后端返回的数据
    const dayData = monthDataMap.get(dateStr)
    if (dayData) {
      return {
        total: dayData.totalCount,
        completed: dayData.completedCount,
        completionRate: dayData.completionRate,
        completedTypeIcons: dayData.completedTypeIcons,
        hasUnfinished: dayData.hasUnfinished,
      }
    }

    // 如果没有后端数据，使用 tasks（兼容旧代码）
    const dayTasks = tasks.filter((t) => t.date === dateStr)
    const total = dayTasks.length
    const completed = dayTasks.filter((t) => t.completed).length
    const completedWithCategories = dayTasks.filter((t) => t.completed && t.categoryId)

    return {
      total,
      completed,
      completionRate: total > 0 ? completed / total : 0,
      completedTypeIcons: completedWithCategories.map((t) => t.categoryIcon || "").filter(Boolean),
      hasUnfinished: total > completed,
    }
  }

  const getCompletionColor = (rate: number) => {
    if (rate >= 1) return "bg-green-100/80 border-green-200"
    if (rate >= 0.75) return "bg-blue-100/80 border-blue-200"
    if (rate >= 0.5) return "bg-yellow-100/80 border-yellow-200"
    if (rate >= 0.25) return "bg-orange-100/80 border-orange-200"
    return ""
  }

  const getCategoryById = (id: string) => categories.find((c) => c.id === id)

  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() - 1)
    onMonthChange?.(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() + 1)
    onMonthChange?.(newDate)
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePreviousMonth}
            className="p-2 hover:bg-muted/50 rounded-full transition-colors active:scale-95"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-6 w-6 text-foreground/70" />
          </button>

          <div className="inline-block relative">
            <div className="text-5xl font-bold text-foreground/90 tracking-tight">
              {selectedDate.toLocaleDateString("en-US", { month: "short" })}.
            </div>
            <div className="absolute -top-2 -right-12 text-2xl">✨</div>
          </div>

          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-muted/50 rounded-full transition-colors active:scale-95"
            aria-label="Next month"
          >
            <ChevronRight className="h-6 w-6 text-foreground/70" />
          </button>
        </div>

        <div className="text-sm text-muted-foreground font-handwriting mt-2">{selectedDate.getFullYear()}</div>
      </div>

      {incompleteTasks.length > 0 && (
        <button
          onClick={() => setShowIncompleteModal(true)}
          className="w-full py-3 px-4 bg-amber-50 border-2 border-amber-200 rounded-xl flex items-center justify-between active:scale-[0.98] transition-transform hover:bg-amber-100"
        >
          <div className="flex items-center gap-2">
            <ListTodo className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">待完成任务</span>
          </div>
          <span className="text-lg font-bold text-amber-600">{incompleteTasks.length}</span>
        </button>
      )}

      <div className="bg-background rounded-2xl border-2 border-foreground/20 overflow-hidden sketch-border">
        <div className="grid grid-cols-7 border-b-2 border-foreground/20 bg-muted/20">
          {weekDays.map((day) => (
            <div key={day} className="text-center py-3 text-xs font-bold text-foreground/70 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7" style={{ gridAutoRows: "minmax(85px, 1fr)" }}>
          {calendarDays.map((day, index) => {
            const isCurrentMonth = day.getMonth() === selectedDate.getMonth()
            const isToday = day.toDateString() === new Date().toDateString()
            const { total, completed, completionRate, completedTypeIcons, hasUnfinished } = getTaskStatsForDay(day)

            return (
              <button
                key={index}
                onClick={() => {
                  // 创建新的 Date 对象，使用本地时间，避免时区问题
                  const localDate = new Date(day.getFullYear(), day.getMonth(), day.getDate())
                  onDateClick(localDate)
                }}
                disabled={!isCurrentMonth}
                className={`relative w-full aspect-square min-h-[85px] border-r border-b border-foreground/15 p-2.5 transition-all active:scale-95 disabled:active:scale-100 overflow-hidden ${
                  !isCurrentMonth ? "text-muted-foreground/30 bg-muted/5" : "hover:bg-muted/30"
                } ${isToday ? "bg-yellow-50 border-yellow-300 border-2" : ""} ${
                  total > 0 && isCurrentMonth ? getCompletionColor(completionRate) : ""
                }`}
              >
                <div className="flex flex-col items-start justify-start h-full w-full gap-1">
                  <div className={`text-sm font-bold leading-none ${isToday ? "text-foreground" : "text-foreground/80"}`}>
                    {day.getDate()}
                  </div>

                  {isCurrentMonth && completedTypeIcons && completedTypeIcons.length > 0 && (() => {
                    const iconCount = completedTypeIcons.length
                    // 根据图标数量动态调整图标大小和显示数量，尽可能并排显示更多图标
                    let iconSize = "w-5 h-5"
                    let textSize = "text-[10px]"
                    let gapSize = "gap-1"
                    let maxIcons = iconCount // 默认显示所有图标
                    
                    // 如果图标太多，缩小尺寸以容纳更多
                    if (iconCount > 12) {
                      iconSize = "w-3 h-3"
                      textSize = "text-[7px]"
                      gapSize = "gap-0.5"
                      maxIcons = Math.min(iconCount, 16) // 最多显示16个
                    } else if (iconCount > 9) {
                      iconSize = "w-3.5 h-3.5"
                      textSize = "text-[8px]"
                      gapSize = "gap-0.5"
                      maxIcons = iconCount
                    } else if (iconCount > 6) {
                      iconSize = "w-4 h-4"
                      textSize = "text-[9px]"
                      gapSize = "gap-0.5"
                      maxIcons = iconCount
                    } else if (iconCount > 4) {
                      iconSize = "w-4.5 h-4.5"
                      textSize = "text-[9px]"
                      gapSize = "gap-0.5"
                      maxIcons = iconCount
                    }
                    
                    const displayIcons = completedTypeIcons.slice(0, maxIcons)
                    const remainingCount = iconCount - maxIcons
                    
                    return (
                      <div className={`flex flex-wrap ${gapSize} mt-0.5 w-full max-w-full px-0.5`}>
                        {displayIcons.map((icon, idx) => (
                          <div
                            key={idx}
                            className={`${iconSize} rounded-full bg-white border border-foreground/20 flex items-center justify-center ${textSize} shadow-sm flex-shrink-0`}
                            title="已完成"
                          >
                            {icon}
                          </div>
                        ))}
                        {remainingCount > 0 && (
                          <div className={`${iconSize} rounded-full bg-white border border-foreground/20 flex items-center justify-center text-[7px] font-bold text-foreground/60 flex-shrink-0`}>
                            +{remainingCount}
                          </div>
                        )}
                      </div>
                    )
                  })()}

                  {total > 0 && isCurrentMonth && hasUnfinished && (
                    <div className="flex items-center gap-1 mt-auto w-full px-0.5">
                      <div className="w-4 h-4 rounded-full border-2 border-foreground/40 flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                        {total - completed}
                      </div>
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground font-handwriting">
        {stats.total > 0 ? (
          <p>
            {stats.completed} of {stats.total} tasks completed this month
          </p>
        ) : (
          <p>No tasks this month, time to plan ahead!</p>
        )}
      </div>

      {showIncompleteModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end" onClick={() => setShowIncompleteModal(false)}>
          <div
            className="w-full bg-background rounded-t-3xl max-h-[70vh] overflow-y-auto pb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border px-6 py-4">
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">待完成任务 ({incompleteTasks.length})</h3>
            </div>
            <div className="px-6 py-4 space-y-3">
              {incompleteTasks.map((task) => {
                const category = task.categoryId ? getCategoryById(task.categoryId) : null
                return (
                  <div
                    key={task.id}
                    className="p-4 bg-muted/30 rounded-xl border border-border flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {category && <span className="text-lg">{category.icon}</span>}
                        <span className="font-medium text-foreground">{task.title}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(task.date).toLocaleDateString("zh-CN")} {task.time}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
