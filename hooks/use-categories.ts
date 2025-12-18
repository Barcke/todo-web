"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import { transformTypeResponse } from "@/lib/data-transform"
import type { TaskCategory, TodoTypeResponse } from "@/types/task"
import { toast } from "@/hooks/use-toast"

export function useCategories() {
  const [categories, setCategories] = useState<TaskCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadCategories = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.getTypes()
      const transformedCategories = response.data.map(transformTypeResponse)
      setCategories(transformedCategories)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载分类失败")
      setError(error)
      toast({
        title: "加载失败",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  const createCategory = useCallback(async (category: Omit<TaskCategory, "id">) => {
    try {
      const response = await apiClient.createType({
        typeName: category.name,
        icon: category.icon,
        color: category.color,
      })
      const newCategory = transformTypeResponse(response.data)
      setCategories((prev) => [...prev, newCategory])
      toast({
        title: "创建成功",
        description: `分类「${newCategory.name}」已创建`,
      })
      return newCategory
    } catch (err) {
      const error = err instanceof Error ? err : new Error("创建分类失败")
      toast({
        title: "创建失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const updateCategory = useCallback(async (id: string, category: Partial<TaskCategory>) => {
    try {
      const response = await apiClient.updateType(id, {
        typeName: category.name || "",
        icon: category.icon || "",
        color: category.color,
      })
      const updatedCategory = transformTypeResponse(response.data)
      setCategories((prev) => prev.map((c) => (c.id === id ? updatedCategory : c)))
      toast({
        title: "更新成功",
        description: `分类「${updatedCategory.name}」已更新`,
      })
      return updatedCategory
    } catch (err) {
      const error = err instanceof Error ? err : new Error("更新分类失败")
      toast({
        title: "更新失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const deleteCategory = useCallback(async (id: string) => {
    try {
      await apiClient.deleteType(id)
      setCategories((prev) => prev.filter((c) => c.id !== id))
      toast({
        title: "删除成功",
        description: "分类已删除",
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("删除分类失败")
      toast({
        title: "删除失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  return {
    categories,
    loading,
    error,
    createCategory,
    updateCategory,
    deleteCategory,
    refresh: loadCategories,
  }
}

