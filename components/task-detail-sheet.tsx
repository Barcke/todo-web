"use client"

import type { Task } from "@/types/task"
import { Check, X, Download, FileImage } from "lucide-react"
import { useEffect } from "react"

interface TaskDetailSheetProps {
  task: Task | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onComplete: (taskId: string) => void
}

export function TaskDetailSheet({ task, open, onOpenChange, onComplete }: TaskDetailSheetProps) {
  useEffect(() => {
    if (open && task) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open, task])

  useEffect(() => {
    if (!open || !task) return

    const handleComplete = () => {
      const event = new CustomEvent("show-toast", {
        detail: { message: `太棒了！已完成「${task.title}」`, type: "success" },
      })
      window.dispatchEvent(event)
    }

    window.addEventListener("task-completed", handleComplete)
    return () => window.removeEventListener("task-completed", handleComplete)
  }, [open, task])

  if (!open || !task) return null

  const handleComplete = () => {
    onComplete(task.id)
    window.dispatchEvent(new Event("task-completed"))
  }

  const handleImageDownload = (imageUrl: string, index: number) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `attachment-${index + 1}.png`
    link.click()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={() => onOpenChange(false)}
      />

      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="bg-background rounded-t-3xl border-t border-x border-border/40 shadow-2xl max-w-lg mx-auto pb-safe max-h-[85vh] overflow-y-auto">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 rounded-full bg-muted-foreground/30" />
          </div>

          {/* Content */}
          <div className="px-5 pt-2 pb-5">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-3 flex-1 pr-4">
                {task.categoryIcon && <span className="text-2xl">{task.categoryIcon}</span>}
                <div>
                  <h2 className="text-lg font-semibold text-foreground leading-relaxed">{task.title}</h2>
                  {task.category && <p className="text-xs text-muted-foreground mt-1">{task.category}</p>}
                </div>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center active:scale-95 transition-transform flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-border/40">
                <div className="text-sm text-muted-foreground font-medium">时间</div>
                <div className="text-sm font-semibold">{task.time}</div>
              </div>

              {task.repeatConfig?.enabled && (
                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="text-sm text-muted-foreground font-medium">重复</div>
                  <div className="text-sm font-semibold">
                    {task.repeatConfig.frequency === "daily"
                      ? "每天"
                      : task.repeatConfig.frequency === "weekly"
                        ? "每周"
                        : "每月"}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between py-3 border-b border-border/40">
                <div className="text-sm text-muted-foreground font-medium">状态</div>
                <div className={`text-sm font-semibold ${task.completed ? "text-muted-foreground" : ""}`}>
                  {task.completed ? "已完成" : "待完成"}
                </div>
              </div>

              {task.images && task.images.length > 0 && (
                <div className="pt-3">
                  <div className="text-sm text-muted-foreground font-medium mb-3">附件</div>
                  <div className="grid grid-cols-3 gap-3">
                    {task.images.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden border border-border/40 bg-muted/20">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`附件 ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-active:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleImageDownload(img, idx)}
                            className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center active:scale-95 transition-transform"
                          >
                            <Download className="h-4 w-4 text-black" />
                          </button>
                        </div>
                        <div className="mt-1 text-xs text-center text-muted-foreground truncate">
                          <FileImage className="h-3 w-3 inline mr-1" />
                          图片 {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            {!task.completed && (
              <button
                onClick={handleComplete}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-foreground text-background rounded-xl font-semibold active:scale-[0.98] transition-transform shadow-sm"
              >
                <Check className="h-5 w-5" />
                标记完成
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
