"use client"

import { useEffect, useState } from "react"

interface ToastMessage {
  id: string
  message: string
  type: "success" | "achievement"
}

export function ToastNotifications() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const id = Math.random().toString(36).substring(7)
      const newToast: ToastMessage = {
        id,
        message: event.detail.message,
        type: event.detail.type,
      }

      setToasts((prev) => [...prev, newToast])

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 3000)
    }

    window.addEventListener("show-toast", handleToast as EventListener)
    return () => window.removeEventListener("show-toast", handleToast as EventListener)
  }, [])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-sm animate-in slide-in-from-top fade-in duration-300 ${
            toast.type === "achievement"
              ? "bg-foreground text-background"
              : "bg-background/95 text-foreground border border-border/40"
          }`}
        >
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  )
}
