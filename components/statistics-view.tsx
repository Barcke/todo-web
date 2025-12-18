"use client"

import { useMemo } from "react"
import { X, TrendingUp, Award, Target, Loader2 } from "lucide-react"
import { useStatistics } from "@/hooks/use-statistics"

interface StatisticsViewProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StatisticsView({ open, onOpenChange }: StatisticsViewProps) {
  // 获取当前年月（格式：yyyy-MM）
  const yearMonth = useMemo(() => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    return `${year}-${month}`
  }, [open]) // 当 open 变化时重新计算，确保使用最新的月份

  // 使用 hook 获取统计数据
  const { monthStats, typeStats, loading } = useStatistics(yearMonth, { autoLoad: open })

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl animate-slide-up pb-safe max-h-[85vh] overflow-y-auto">
        <div className="px-5 py-4 border-b border-border/40 sticky top-0 bg-background z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">本月统计</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-5 py-5 space-y-5">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              {/* 总体统计卡片 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-purple-500" />
                  <h3 className="text-base font-semibold">总体完成情况</h3>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">
                    {monthStats ? Math.round(monthStats.completionRate * 100) : 0}%
                  </span>
                  <span className="text-muted-foreground mb-1">完成率</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  已完成 {monthStats?.completedCount ?? 0} / {monthStats?.totalCount ?? 0} 项任务
                </p>
              </div>

              {/* 分类统计 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4" />
                  <h3 className="text-sm font-semibold">分类统计</h3>
                </div>

                {typeStats && typeStats.length > 0 ? (
                  <div className="space-y-3">
                    {typeStats.map((stat) => (
                      <div key={stat.typeId} className="p-4 rounded-xl bg-muted/20 border border-border/40">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{stat.typeIcon}</span>
                            <span className="font-medium">{stat.typeName}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">{stat.completedCount}</div>
                            <div className="text-xs text-muted-foreground">已完成</div>
                          </div>
                        </div>

                        {/* 进度条 - 基于分类的完成情况计算 */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                            style={{
                              width: `${(() => {
                                const total = stat.completedCount + (stat.pendingCount || 0)
                                if (total === 0) return 0
                                return Math.round((stat.completedCount / total) * 100)
                              })()}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">本月还没有完成的任务</p>
                    <p className="text-xs mt-1">开始添加并完成任务来查看统计吧</p>
                  </div>
                )}
              </div>

              {/* 成就提示 */}
              {monthStats && Math.round(monthStats.completionRate * 100) >= 80 && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <Award className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">太棒了！</div>
                      <div className="text-xs">本月完成率超过80%，继续保持！</div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
