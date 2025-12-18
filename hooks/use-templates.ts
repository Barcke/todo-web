"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import { transformTemplateResponse, transformTemplateToRequest } from "@/lib/data-transform"
import type { TaskTemplate, TemplateResponse } from "@/types/task"
import { toast } from "@/hooks/use-toast"

export function useTemplates() {
  const [templates, setTemplates] = useState<TaskTemplate[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadTemplates = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.getTemplates()
      const transformedTemplates = response.data.map(transformTemplateResponse)
      setTemplates(transformedTemplates)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载模板失败")
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
    loadTemplates()
  }, [loadTemplates])

  const createTemplate = useCallback(async (template: Omit<TaskTemplate, "id" | "tasks">) => {
    try {
      const request = transformTemplateToRequest(template)
      const response = await apiClient.createTemplate(request)
      const newTemplate = transformTemplateResponse(response.data)
      setTemplates((prev) => [...prev, newTemplate])
      toast({
        title: "创建成功",
        description: `模板「${newTemplate.name}」已创建`,
      })
      return newTemplate
    } catch (err) {
      const error = err instanceof Error ? err : new Error("创建模板失败")
      toast({
        title: "创建失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const updateTemplate = useCallback(async (id: string, template: Omit<TaskTemplate, "id" | "tasks">) => {
    try {
      const request = transformTemplateToRequest(template)
      const response = await apiClient.updateTemplate(id, request)
      const updatedTemplate = transformTemplateResponse(response.data)
      setTemplates((prev) => prev.map((t) => (t.id === id ? updatedTemplate : t)))
      toast({
        title: "更新成功",
        description: `模板「${updatedTemplate.name}」已更新`,
      })
      return updatedTemplate
    } catch (err) {
      const error = err instanceof Error ? err : new Error("更新模板失败")
      toast({
        title: "更新失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const deleteTemplate = useCallback(async (id: string) => {
    try {
      await apiClient.deleteTemplate(id)
      setTemplates((prev) => prev.filter((t) => t.id !== id))
      toast({
        title: "删除成功",
        description: "模板已删除",
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("删除模板失败")
      toast({
        title: "删除失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  const addTemplateTodo = useCallback(async (templateId: string, title: string, typeId?: string) => {
    try {
      await apiClient.addTemplateTodo(templateId, title, typeId)
      await loadTemplates() // 重新加载模板列表
      toast({
        title: "添加成功",
        description: "任务项已添加到模板",
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("添加任务项失败")
      toast({
        title: "添加失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [loadTemplates])

  const updateTemplateTodo = useCallback(
    async (templateId: string, todoId: string, updates: { title?: string; typeId?: string }) => {
      try {
        await apiClient.updateTemplateTodo(templateId, todoId, updates)
        await loadTemplates() // 重新加载模板列表
        toast({
          title: "更新成功",
          description: "任务项已更新",
        })
      } catch (err) {
        const error = err instanceof Error ? err : new Error("更新任务项失败")
        toast({
          title: "更新失败",
          description: error.message,
          variant: "destructive",
        })
        throw error
      }
    },
    [loadTemplates]
  )

  const deleteTemplateTodo = useCallback(async (templateId: string, todoId: string) => {
    try {
      await apiClient.deleteTemplateTodo(templateId, todoId)
      await loadTemplates() // 重新加载模板列表
      toast({
        title: "删除成功",
        description: "任务项已删除",
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("删除任务项失败")
      toast({
        title: "删除失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [loadTemplates])

  const applyTemplate = useCallback(async (templateId: string, date: string, time?: string) => {
    try {
      const response = await apiClient.applyTemplate(templateId, date, time)
      toast({
        title: "应用成功",
        description: `已创建 ${response.data.length} 个任务`,
      })
      return response.data
    } catch (err) {
      const error = err instanceof Error ? err : new Error("应用模板失败")
      toast({
        title: "应用失败",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }, [])

  return {
    templates,
    loading,
    error,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    addTemplateTodo,
    updateTemplateTodo,
    deleteTemplateTodo,
    applyTemplate,
    refresh: loadTemplates,
  }
}

export function useTemplate(id: string | null) {
  const [template, setTemplate] = useState<TaskTemplate | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadTemplate = useCallback(async () => {
    if (!id) {
      setTemplate(null)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.getTemplateById(id)
      const transformedTemplate = transformTemplateResponse(response.data)
      setTemplate(transformedTemplate)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("加载模板失败")
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
    loadTemplate()
  }, [loadTemplate])

  return {
    template,
    loading,
    error,
    refresh: loadTemplate,
  }
}

