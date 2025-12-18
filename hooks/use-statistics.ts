"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import type { MonthStatisticsResponse, TypeStatisticsResponse } from "@/types/task"
import { toast } from "@/hooks/use-toast"

interface UseStatisticsOptions {
  autoLoad?: boolean
}

export function useStatistics(yearMonth: string, options: UseStatisticsOptions = {}) {
  const { autoLoad = true } = options
  const [monthStats, setMonthStats] = useState<MonthStatisticsResponse | null>(null)
  const [typeStats, setTypeStats] = useState<TypeStatisticsResponse[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadStatistics = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [monthResponse, typeResponse] = await Promise.all([
        apiClient.getMonthStatistics(yearMonth),
        apiClient.getTypeStatistics(yearMonth),
      ])
      setMonthStats(monthResponse.data)
      setTypeStats(typeResponse.data)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载统计数据失败")
      setError(error)
      toast({
        title: "加载失败",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [yearMonth])

  useEffect(() => {
    if (autoLoad && yearMonth) {
      loadStatistics()
    }
  }, [autoLoad, yearMonth, loadStatistics])

  return {
    monthStats,
    typeStats,
    loading,
    error,
    refresh: loadStatistics,
  }
}

