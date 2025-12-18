"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Calendar, CalendarDays, CalendarRange, User, LogOut } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ViewType = "day" | "week" | "month"

interface CalendarHeaderProps {
  view: ViewType
  selectedDate: Date
  onViewChange: (view: ViewType) => void
  onLogout: () => void
}

export function CalendarHeader({ view, selectedDate, onViewChange, onLogout }: CalendarHeaderProps) {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="px-4 py-4 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold tracking-tight text-foreground leading-tight">
              {view === "day" && selectedDate.toLocaleDateString("zh-CN", { month: "long", day: "numeric" })}
              {view === "week" && "本周"}
              {view === "month" && selectedDate.toLocaleDateString("zh-CN", { year: "numeric", month: "long" })}
            </h1>
            {view === "day" && <span className="text-base">☀️</span>}
          </div>
          {view === "day" && (
            <p className="text-xs text-muted-foreground mt-0.5 font-handwriting">
              {selectedDate.toLocaleDateString("zh-CN", { weekday: "long" })}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {user?.username?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-medium">{user?.username}</span>
                    {user?.email && <span className="text-xs text-muted-foreground">{user.email}</span>}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  <User className="h-4 w-4" />
                  <span>个人信息</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} variant="destructive">
                  <LogOut className="h-4 w-4" />
                  <span>登出</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors"
            >
              登录
            </button>
          )}

          <div className="flex gap-1 bg-muted/40 rounded-lg p-1">
            <button
              onClick={() => onViewChange("day")}
              className={`flex items-center justify-center px-3 py-2 rounded-md text-xs font-medium transition-all active:scale-95 ${
                view === "day" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Calendar className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewChange("week")}
              className={`flex items-center justify-center px-3 py-2 rounded-md text-xs font-medium transition-all active:scale-95 ${
                view === "week" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <CalendarDays className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewChange("month")}
              className={`flex items-center justify-center px-3 py-2 rounded-md text-xs font-medium transition-all active:scale-95 ${
                view === "month" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <CalendarRange className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

