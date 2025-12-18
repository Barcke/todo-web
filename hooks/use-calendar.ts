"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import { transformTodoResponse } from "@/lib/data-transform"
import type { Task, CalendarDayResponse } from "@/types/task"
import { toast } from "@/hooks/use-toast"

type ViewType = "day" | "week" | "month"

interface UseCalendarViewOptions {
  autoLoad?: boolean
}

// 格式化日期为本地日期字符串（避免时区问题）
function formatDateLocal(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function useCalendarView(view: ViewType, date: Date, options: UseCalendarViewOptions = {}) {
  const { autoLoad = true } = options
  const [data, setData] = useState<{
    tasks?: Task[]
    monthData?: CalendarDayResponse[]
  }>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (view === "day") {
        const dateStr = formatDateLocal(date)
        const response = await apiClient.getDayView(dateStr)
        const tasks = response.data.map(transformTodoResponse)
        setData({ tasks })
      } else if (view === "week") {
        // 计算周的开始日期（周一）
        const dayOfWeek = date.getDay()
        const monday = new Date(date)
        monday.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
        const weekStartDate = formatDateLocal(monday)
        const response = await apiClient.getWeekView(weekStartDate)
        const tasks = response.data.map(transformTodoResponse)
        setData({ tasks })
      } else if (view === "month") {
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
        const response = await apiClient.getMonthView(yearMonth)
        setData({ monthData: response.data })
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载日历数据失败")
      setError(error)
      toast({
        title: "加载失败",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [view, date])

  useEffect(() => {
    if (autoLoad) {
      loadData()
    }
  }, [autoLoad, loadData])

  return {
    data,
    loading,
    error,
    refresh: loadData,
  }
}

