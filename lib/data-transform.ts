import type {
  Task,
  TodoResponse,
  TodoCreateRequest,
  RepeatConfig,
  RepeatRule,
  TaskCategory,
  TodoTypeResponse,
  TaskTemplate,
  TemplateResponse,
} from "@/types/task"

/**
 * 将后端返回的 TodoResponse 转换为前端使用的 Task
 */
export function transformTodoResponse(todo: TodoResponse): Task {
  return {
    id: todo.id,
    title: todo.title,
    time: todo.time || "00:00",
    completed: todo.status === "completed",
    date: todo.date,
    description: todo.description,
    category: todo.typeName,
    categoryIcon: todo.typeIcon,
    categoryId: todo.typeId,
    repeatType: todo.repeatType,
    repeatRule: todo.repeatRule,
    attachments: todo.attachments,
    source: todo.source,
    templateId: todo.templateId,
    createdAt: todo.createdAt,
    completedAt: todo.completedAt,
    updatedAt: todo.updatedAt,
    // 兼容旧代码：将 attachments 转换为 images
    images: todo.attachments
      ?.filter((att) => att.type === "image")
      .map((att) => att.previewUrl || att.url),
  }
}

/**
 * 将前端 Task 转换为后端 TodoCreateRequest
 */
export function transformTaskToRequest(task: Omit<Task, "id">): TodoCreateRequest {
  const request: TodoCreateRequest = {
    title: task.title,
    description: task.description,
    date: task.date,
    time: task.time || undefined,
    typeId: task.categoryId,
  }

  // 处理重复配置
  if (task.repeatConfig?.enabled) {
    request.repeatType = task.repeatConfig.frequency

    // 转换重复规则
    if (task.repeatConfig.frequency === "weekly" && task.repeatConfig.daysOfWeek) {
      // 前端使用 0-6 (0=周日)，后端使用 1-7 (1=周一)
      request.repeatRule = {
        type: "weekly",
        days: task.repeatConfig.daysOfWeek.map((day) => {
          // 转换：前端 0(周日) -> 后端 7(周日)
          // 前端 1(周一) -> 后端 1(周一)
          return day === 0 ? 7 : day
        }),
      }
    } else if (task.repeatConfig.frequency === "monthly" && task.repeatConfig.dayOfMonth) {
      request.repeatRule = {
        type: "monthly",
        days: [task.repeatConfig.dayOfMonth],
      }
    } else if (task.repeatConfig.frequency === "daily") {
      request.repeatRule = {
        type: "daily",
        days: [],
      }
    }
  } else if (task.repeatType && task.repeatType !== "none") {
    // 如果已经有后端格式的重复类型，直接使用
    request.repeatType = task.repeatType
    request.repeatRule = task.repeatRule
  } else {
    request.repeatType = "none"
  }

  return request
}

/**
 * 将后端 RepeatRule 转换为前端 RepeatConfig
 */
export function transformRepeatRule(repeatType?: string, repeatRule?: RepeatRule): RepeatConfig | undefined {
  if (!repeatType || repeatType === "none" || !repeatRule) {
    return undefined
  }

  const config: RepeatConfig = {
    enabled: true,
    frequency: repeatRule.type as "daily" | "weekly" | "monthly",
    interval: 1,
  }

  if (repeatRule.type === "weekly" && repeatRule.days.length > 0) {
    // 后端使用 1-7 (1=周一)，前端使用 0-6 (0=周日)
    config.daysOfWeek = repeatRule.days.map((day) => {
      return day === 7 ? 0 : day
    })
  } else if (repeatRule.type === "monthly" && repeatRule.days.length > 0) {
    config.dayOfMonth = repeatRule.days[0]
  }

  return config
}

/**
 * 将后端 TodoTypeResponse 转换为前端 TaskCategory
 */
export function transformTypeResponse(type: TodoTypeResponse): TaskCategory {
  return {
    id: type.typeId,
    name: type.typeName,
    icon: type.icon,
    color: type.color,
  }
}

/**
 * 将后端 TemplateResponse 转换为前端 TaskTemplate
 */
export function transformTemplateResponse(template: TemplateResponse): TaskTemplate {
  return {
    id: template.templateId,
    name: template.templateName,
    icon: "📝", // 后端没有图标字段，使用默认图标
    description: template.description,
    tasks: template.todos.map((todo) => ({
      id: todo.id,
      title: todo.title,
      time: "09:00", // 后端模板任务项没有时间，使用默认时间
      category: todo.typeName,
      categoryIcon: todo.typeIcon,
      categoryId: todo.typeId,
      sortOrder: todo.sortOrder,
    })),
  }
}

/**
 * 将前端 TaskTemplate 转换为后端 TemplateCreateRequest
 */
export function transformTemplateToRequest(template: Omit<TaskTemplate, "id" | "tasks">): {
  templateName: string
  description?: string
} {
  return {
    templateName: template.name,
    description: template.description,
  }
}

