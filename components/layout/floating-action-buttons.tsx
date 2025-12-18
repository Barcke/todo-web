"use client"

import { Plus, Sparkles, BarChart3 } from "lucide-react"

interface FloatingActionButtonsProps {
  onAddTask: () => void
  onShowStatistics: () => void
  onShowAIChat: () => void
}

export function FloatingActionButtons({ onAddTask, onShowStatistics, onShowAIChat }: FloatingActionButtonsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-20 flex flex-col gap-3">
      <button
        onClick={onShowStatistics}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform hover:shadow-xl"
      >
        <BarChart3 className="h-5 w-5" />
      </button>
      <button
        onClick={onShowAIChat}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform hover:shadow-xl"
      >
        <Sparkles className="h-5 w-5" />
      </button>
      <button
        onClick={onAddTask}
        className="w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center active:scale-95 transition-transform hover:shadow-xl"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  )
}

