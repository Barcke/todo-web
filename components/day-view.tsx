"use client"

import type { Task } from "@/types/task"
import { Check } from "lucide-react"
import { useMemo } from "react"

interface DayViewProps {
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

export function DayView({ tasks, selectedDate, onTaskClick }: DayViewProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i)

  const selectedDateStr = formatDateLocal(selectedDate)
  const todayTasks = tasks.filter((t) => t.date === selectedDateStr)

  const stats = useMemo(() => {
    const total = todayTasks.length
    const completed = todayTasks.filter((t) => t.completed).length
    const byCategory = todayTasks.reduce(
      (acc, task) => {
        const cat = task.categoryId || "uncategorized"
        if (!acc[cat]) acc[cat] = { total: 0, completed: 0 }
        acc[cat].total++
        if (task.completed) acc[cat].completed++
        return acc
      },
      {} as Record<string, { total: number; completed: number }>,
    )

    return { total, completed, byCategory }
  }, [todayTasks])

  const getTasksForHour = (hour: number) => {
    const hourStr = hour.toString().padStart(2, "0")
    return todayTasks.filter((task) => task.time.startsWith(hourStr))
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-4 border-2 border-foreground/10">
        {stats.total > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-foreground/80">Today's Progress</span>
              <span className="text-xl font-bold text-foreground">
                {stats.completed}/{stats.total}
              </span>
            </div>
            {/* Visual progress bar with hand-drawn style */}
            <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(stats.completed / stats.total) * 100}%` }}
              />
            </div>
            {/* Category breakdown */}
            {Object.keys(stats.byCategory).length > 0 && (
              <div className="flex gap-2 flex-wrap mt-3">
                {Object.entries(stats.byCategory).map(([cat, data]) => (
                  <div key={cat} className="text-[10px] bg-background/60 rounded-full px-2 py-1 font-medium">
                    {cat}: {data.completed}/{data.total}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center py-8 text-sm font-handwriting text-muted-foreground">
            No tasks today - enjoy your free time! ☀️
          </p>
        )}
      </div>

      {/* Timeline */}
      {stats.total > 0 && (
        <div className="space-y-0 bg-muted/10 rounded-2xl border border-border/40 overflow-hidden">
          {hours.map((hour) => {
            const hourTasks = getTasksForHour(hour)
            if (hourTasks.length === 0) return null

            return (
              <div key={hour} className="flex border-b border-border/30 last:border-0">
                <div className="w-16 flex-shrink-0 py-4 px-3 text-xs text-muted-foreground font-semibold">
                  {hour.toString().padStart(2, "0")}:00
                </div>
                <div className="flex-1 py-3 pr-3 space-y-2">
                  {hourTasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => onTaskClick(task)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all active:scale-[0.98] border ${
                        task.completed
                          ? "text-muted-foreground bg-muted/20 border-transparent"
                          : "text-foreground bg-background border-border/40 shadow-sm active:shadow"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium leading-relaxed">{task.title}</span>
                        {task.completed && <Check className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
