"use client"

import type { Task } from "@/types/task"
import { Check } from "lucide-react"
import { useMemo } from "react"

interface WeekViewProps {
  tasks: Task[]
  selectedDate: Date
  onTaskClick: (task: Task) => void
}

// 格式化日期为本地日期字符串（避免时区问题）
function formatDateLocal(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function WeekView({ tasks, selectedDate, onTaskClick }: WeekViewProps) {
  const weekDays = useMemo(() => {
    const days = []
    const currentDay = new Date(selectedDate)
    const dayOfWeek = currentDay.getDay()
    const monday = new Date(currentDay)
    monday.setDate(currentDay.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday)
      day.setDate(monday.getDate() + i)
      days.push(day)
    }
    return days
  }, [selectedDate])

  const stats = useMemo(() => {
    const weekDates = weekDays.map((d) => formatDateLocal(d))
    const weekTasks = tasks.filter((t) => weekDates.includes(t.date))
    const total = weekTasks.length
    const completed = weekTasks.filter((t) => t.completed).length
    return { total, completed }
  }, [tasks, weekDays])

  const getTasksForDay = (date: Date) => {
    const dateStr = formatDateLocal(date)
    return tasks.filter((t) => t.date === dateStr)
  }

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="text-xs text-muted-foreground">
        {stats.total > 0 ? (
          <p>
            本周共有 {stats.total} 件待办，已完成 {stats.completed} 件
          </p>
        ) : (
          <p className="text-center py-16 text-sm">本周暂无待办，享受轻松时光吧~</p>
        )}
      </div>

      {/* Week Grid - Horizontal scrollable cards */}
      {stats.total > 0 && (
        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex gap-3 snap-x snap-mandatory">
            {weekDays.map((day) => {
              const dayTasks = getTasksForDay(day)
              const isToday = day.toDateString() === new Date().toDateString()

              return (
                <div
                  key={day.toISOString()}
                  className={`flex-shrink-0 w-[160px] snap-center rounded-2xl border transition-all ${
                    isToday ? "border-foreground/30 bg-muted/40 shadow-sm" : "border-border/40 bg-muted/10"
                  } p-4`}
                >
                  <div className="text-center mb-4">
                    <div className="text-xs text-muted-foreground font-medium">
                      {day.toLocaleDateString("zh-CN", { weekday: "short" })}
                    </div>
                    <div className={`text-2xl font-bold mt-1 ${isToday ? "text-foreground" : "text-foreground/80"}`}>
                      {day.getDate()}
                    </div>
                    {dayTasks.length > 0 && (
                      <div className="text-[10px] text-muted-foreground mt-1">
                        {dayTasks.filter((t) => t.completed).length}/{dayTasks.length}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    {dayTasks.length === 0 ? (
                      <div className="text-center py-6 text-xs text-muted-foreground">无任务</div>
                    ) : (
                      dayTasks.map((task) => (
                        <button
                          key={task.id}
                          onClick={() => onTaskClick(task)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all active:scale-95 ${
                            task.completed
                              ? "text-muted-foreground bg-muted/30"
                              : "text-foreground bg-background shadow-sm border border-border/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] text-muted-foreground mb-1">{task.time}</div>
                              <div className="font-medium line-clamp-2 leading-relaxed">{task.title}</div>
                            </div>
                            {task.completed && <Check className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
