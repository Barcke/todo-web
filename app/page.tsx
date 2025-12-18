"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { DayView } from "@/components/day-view"
import { WeekView } from "@/components/week-view"
import { MonthView } from "@/components/month-view"
import { TaskDetailSheet } from "@/components/task-detail-sheet"
import { AddTaskSheet } from "@/components/add-task-sheet"
import { TemplateManager } from "@/components/template-manager"
import { CategoryManager } from "@/components/category-manager"
import { StatisticsView } from "@/components/statistics-view"
import { AIChat } from "@/components/ai-chat"
import { CalendarHeader } from "@/components/layout/calendar-header"
import { FloatingActionButtons } from "@/components/layout/floating-action-buttons"
import { useAuth } from "@/lib/auth-context"
import { useTodos } from "@/hooks/use-todos"
import { useTemplates } from "@/hooks/use-templates"
import { useCategories } from "@/hooks/use-categories"
import { useCalendarView } from "@/hooks/use-calendar"
import type { Task } from "@/types/task"

type ViewType = "day" | "week" | "month"

export default function CalendarPage() {
  const { logout } = useAuth()
  const searchParams = useSearchParams()
  const [view, setView] = useState<ViewType>("day")
  
  // 从 URL 参数读取日期，如果没有则使用当前日期
  const initialDate = useMemo(() => {
    const dateParam = searchParams.get("date")
    if (dateParam) {
      const parsedDate = new Date(dateParam)
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate
      }
    }
    return new Date()
  }, [searchParams])
  
  const [selectedDate, setSelectedDate] = useState(initialDate)
  
  // 当 URL 参数变化时更新日期
  useEffect(() => {
    const dateParam = searchParams.get("date")
    if (dateParam) {
      const parsedDate = new Date(dateParam)
      if (!isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate)
      }
    }
  }, [searchParams])
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [addSheetOpen, setAddSheetOpen] = useState(false)
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false)
  const [categoryManagerOpen, setCategoryManagerOpen] = useState(false)
  const [statisticsOpen, setStatisticsOpen] = useState(false)
  const [aiChatOpen, setAIChatOpen] = useState(false)
  const [consecutiveCount, setConsecutiveCount] = useState(0)

  // 使用 hooks 管理数据
  const { templates, refresh: refreshTemplates } = useTemplates()
  const { categories, createCategory, deleteCategory, refresh: refreshCategories } = useCategories()
  const calendarData = useCalendarView(view, selectedDate)
  const { createTodo, completeTodo } = useTodos({ autoLoad: false })

  // 根据视图获取任务列表
  const tasks = useMemo(() => {
    if (view === "day" || view === "week") {
      return calendarData.data.tasks || []
    }
    return []
  }, [view, calendarData.data])

  const handleLogout = async () => {
    await logout()
  }

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task)
    setSheetOpen(true)
  }

  const handleTaskComplete = async (taskId: string) => {
    try {
      const task = tasks.find((t) => t.id === taskId)
      if (task && !task.completed) {
        await completeTodo(taskId)
        const newCount = consecutiveCount + 1
        setConsecutiveCount(newCount)

        if (newCount === 3) {
          setTimeout(() => {
            const event = new CustomEvent("show-toast", {
              detail: { message: "三连完成！效率满分！", type: "achievement" },
            })
            window.dispatchEvent(event)
            setConsecutiveCount(0)
          }, 500)
        }
      } else {
        setConsecutiveCount(0)
      }
      // 刷新日历数据
      calendarData.refresh()
      setSheetOpen(false)
    } catch (error) {
      console.error("完成任务失败:", error)
    }
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setView("day")
  }

  const handleMonthChange = (date: Date) => {
    setSelectedDate(date)
  }

  const handleAddTask = async (newTask: Omit<Task, "id">) => {
    try {
      await createTodo(newTask)
      // 刷新日历数据
      calendarData.refresh()
      setAddSheetOpen(false)
    } catch (error) {
      console.error("添加任务失败:", error)
    }
  }

  // 视图切换时刷新数据
  useEffect(() => {
    calendarData.refresh()
  }, [view, selectedDate])

  // 打开添加待办表单时刷新分类和模板数据，确保数据是最新的
  useEffect(() => {
    if (addSheetOpen) {
      refreshCategories()
      refreshTemplates()
    }
  }, [addSheetOpen, refreshCategories, refreshTemplates])

  return (
    <div className="min-h-screen bg-background pb-safe">
      <CalendarHeader view={view} selectedDate={selectedDate} onViewChange={setView} onLogout={handleLogout} />

      <main className="px-4 py-5">
        {calendarData.loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-muted-foreground">加载中...</div>
          </div>
        ) : (
          <>
            {view === "day" && <DayView tasks={tasks} selectedDate={selectedDate} onTaskClick={handleTaskClick} />}
            {view === "week" && <WeekView tasks={tasks} selectedDate={selectedDate} onTaskClick={handleTaskClick} />}
            {view === "month" && (
              <MonthView
                tasks={tasks}
                monthData={calendarData.data.monthData}
                selectedDate={selectedDate}
                onDateClick={handleDateSelect}
                onMonthChange={handleMonthChange}
                categories={categories}
              />
            )}
          </>
        )}
      </main>

      <FloatingActionButtons
        onAddTask={() => setAddSheetOpen(true)}
        onShowStatistics={() => setStatisticsOpen(true)}
        onShowAIChat={() => setAIChatOpen(true)}
      />

      <TaskDetailSheet
        task={selectedTask}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onComplete={handleTaskComplete}
      />

      <AddTaskSheet
        open={addSheetOpen}
        onOpenChange={setAddSheetOpen}
        onAdd={handleAddTask}
        selectedDate={selectedDate}
        currentView={view}
        templates={templates}
        categories={categories}
        onManageTemplates={() => {
          setAddSheetOpen(false)
          setTemplateManagerOpen(true)
        }}
        onManageCategories={() => {
          setAddSheetOpen(false)
          setCategoryManagerOpen(true)
        }}
      />

      <TemplateManager
        open={templateManagerOpen}
        onOpenChange={setTemplateManagerOpen}
        templates={templates}
        categories={categories}
        onSave={refreshTemplates}
      />

      <CategoryManager
        open={categoryManagerOpen}
        onOpenChange={setCategoryManagerOpen}
        categories={categories}
        onCreateCategory={createCategory}
        onDeleteCategory={deleteCategory}
        onSave={refreshCategories}
      />

      <StatisticsView open={statisticsOpen} onOpenChange={setStatisticsOpen} />

      <AIChat open={aiChatOpen} onOpenChange={setAIChatOpen} />
    </div>
  )
}
