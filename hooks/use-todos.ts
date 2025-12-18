"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import { transformTodoResponse, transformTaskToRequest } from "@/lib/data-transform"
import type { Task, TodoResponse } from "@/types/task"
import { toast } from "@/hooks/use-toast"

interface UseTodosOptions {
  autoLoad?: boolean
  startDate?: string
  endDate?: string
  status?: "pending" | "completed"
}

export function useTodos(options: UseTodosOptions = {}) {
  const { autoLoad = false, startDate, endDate, status } = options
  const [todos, setTodos] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.getTodos({ startDate, endDate, status })
      const transformedTodos = response.data.map(transformTodoResponse)
      setTodos(transformedTodos)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载任务失败")
      setError(error)
      toast({
        title: "加载失败",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [startDate, endDate, status])

  useEffect(() => {
    if (autoLoad) {
      loadTodos()
    }
  }, [autoLoad, loadTodos])

  const createTodo = useCallback(
    async (task: Omit<Task, "id">) => {
      try {
        const request = transformTaskToRequest(task)
        const response = await apiClient.createTodo(request)
        const newTodo = transformTodoResponse(response.data)
        setTodos((prev) => [...prev, newTodo])
        toast({
          title: "创建成功",
          description: `任务「${newTodo.title}」已创建`,
        })
        return newTodo
      } catch (err) {
        const error = err instanceof Error ? err : new Error("创建任务失败")
        toast({
          title: "创建失败",
          description: error.message,
          variant: "destructive",
        })
        throw error
      }
    },
    []
  )

  const updateTodo = useCallback(async (id: string, task: Partial<Task>) => {
    try {
      const request = transformTaskToRequest(task as Omit<Task, "id">)
      const response = await apiClient.updateTodo(id, request)
      const updatedTodo = transformTodoResponse(response.data)
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)))
      toast({
        title: "更新成功",
        description: `任务「${updatedTodo.title}」已更新`,
      })
      return updatedTodo
    } catch (err) {
      const error = err instanceof Error ? err : new Error("更新任务失败")
      toast({
        title: "更新失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const deleteTodo = useCallback(async (id: string) => {
    try {
      await apiClient.deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
      toast({
        title: "删除成功",
        description: "任务已删除",
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("删除任务失败")
      toast({
        title: "删除失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const completeTodo = useCallback(async (id: string) => {
    try {
      const response = await apiClient.completeTodo(id)
      const updatedTodo = transformTodoResponse(response.data)
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)))
      toast({
        title: "完成",
        description: `任务「${updatedTodo.title}」已完成`,
      })
      return updatedTodo
    } catch (err) {
      const error = err instanceof Error ? err : new Error("标记完成失败")
      toast({
        title: "操作失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  return {
    todos,
    loading,
    error,
    createTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
    refresh: loadTodos,
  }
}

export function useTodo(id: string | null) {
  const [todo, setTodo] = useState<Task | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadTodo = useCallback(async () => {
    if (!id) {
      setTodo(null)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.getTodoById(id)
      const transformedTodo = transformTodoResponse(response.data)
      setTodo(transformedTodo)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载任务失败")
      setError(error)
      toast({
        title: "加载失败",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    loadTodo()
  }, [loadTodo])

  const update = useCallback(
    async (updates: Partial<Task>) => {
      if (!id) return
      try {
        const request = transformTaskToRequest(updates as Omit<Task, "id">)
        const response = await apiClient.updateTodo(id, request)
        const updatedTodo = transformTodoResponse(response.data)
        setTodo(updatedTodo)
        toast({
          title: "更新成功",
          description: `任务「${updatedTodo.title}」已更新`,
        })
        return updatedTodo
      } catch (err) {
        const error = err instanceof Error ? err : new Error("更新任务失败")
        toast({
          title: "更新失败",
          description: error.message,
          variant: "destructive",
        })
        throw error
      }
    },
    [id]
  )

  return {
    todo,
    loading,
    error,
    update,
    refresh: loadTodo,
  }
}

