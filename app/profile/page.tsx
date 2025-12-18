"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/lib/auth-context"
import { ApiError } from "@/lib/api-client"
import { AuthGuard } from "@/components/auth-guard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"
import { format } from "date-fns"
import { zhCN } from "date-fns/locale"
import { User, Lock } from "lucide-react"

const updateProfileSchema = z.object({
  phone: z.string().nullable().optional(),
  email: z
    .string()
    .nullable()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "请输入有效的邮箱地址",
    }),
})

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, "请输入原密码"),
    newPassword: z.string().min(6, "密码至少6个字符"),
    confirmPassword: z.string().min(1, "请确认新密码"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  })

type UpdateProfileFormData = z.infer<typeof updateProfileSchema>
type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

export default function ProfilePage() {
  const router = useRouter()
  const { user, updateProfile, changePassword, refreshUser } = useAuth()
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false)

  const profileForm = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      phone: user?.phone || "",
      email: user?.email || "",
    },
  })

  const passwordForm = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  // 当用户信息更新时，更新表单默认值
  useEffect(() => {
    if (user) {
      profileForm.reset({
        phone: user.phone || "",
        email: user.email || "",
      })
    }
  }, [user, profileForm])

  const onUpdateProfile = async (data: UpdateProfileFormData) => {
    setIsUpdatingProfile(true)
    try {
      await updateProfile({
        phone: data.phone || null,
        email: data.email || null,
      })
      toast.success("个人信息更新成功")
      await refreshUser()
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message || "更新失败")
      } else {
        toast.error("更新失败，请稍后重试")
      }
    } finally {
      setIsUpdatingProfile(false)
    }
  }

  const onChangePassword = async (data: ChangePasswordFormData) => {
    setIsChangingPassword(true)
    try {
      await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
      toast.success("密码修改成功")
      passwordForm.reset()
      setPasswordDialogOpen(false)
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message || "密码修改失败")
      } else {
        toast.error("密码修改失败，请稍后重试")
      }
    } finally {
      setIsChangingPassword(false)
    }
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-30 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="px-4 py-4">
            <button
              onClick={() => router.back()}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← 返回
            </button>
          </div>
        </header>

        <main className="px-4 py-6 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">个人信息</h1>
              <p className="mt-1 text-sm text-muted-foreground">管理您的账户信息</p>
            </div>

            {/* 用户基本信息 */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{user?.username}</div>
                  <div className="text-sm text-muted-foreground">
                    注册于{" "}
                    {user?.createdAt &&
                      format(new Date(user.createdAt), "yyyy年MM月dd日", { locale: zhCN })}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">用户名</Label>
                  <Input value={user?.username || ""} disabled className="bg-muted/50" />
                  <p className="text-xs text-muted-foreground">用户名不可修改</p>
                </div>
              </div>
            </div>

            {/* 更新个人信息 */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">联系方式</h2>

              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onUpdateProfile)} className="space-y-4">
                  <FormField
                    control={profileForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="phone">手机号</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="请输入手机号（可选）"
                          {...field}
                          value={field.value || ""}
                          disabled={isUpdatingProfile}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email">邮箱</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="请输入邮箱（可选）"
                          {...field}
                          value={field.value || ""}
                          disabled={isUpdatingProfile}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={isUpdatingProfile}>
                    {isUpdatingProfile ? "更新中..." : "保存更改"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* 修改密码 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    密码
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">定期更改密码以保护账户安全</p>
                </div>
                <Dialog open={passwordDialogOpen} onOpenChange={setPasswordDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">修改密码</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>修改密码</DialogTitle>
                    </DialogHeader>
                    <Form {...passwordForm}>
                      <form onSubmit={passwordForm.handleSubmit(onChangePassword)} className="space-y-4 mt-4">
                        <FormField
                          control={passwordForm.control}
                          name="oldPassword"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="oldPassword">原密码</Label>
                              <Input
                                id="oldPassword"
                                type="password"
                                placeholder="请输入原密码"
                                {...field}
                                disabled={isChangingPassword}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={passwordForm.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="newPassword">新密码</Label>
                              <Input
                                id="newPassword"
                                type="password"
                                placeholder="请输入新密码（至少6个字符）"
                                {...field}
                                disabled={isChangingPassword}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={passwordForm.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="confirmPassword">确认新密码</Label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="请再次输入新密码"
                                {...field}
                                disabled={isChangingPassword}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2 justify-end">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setPasswordDialogOpen(false)
                              passwordForm.reset()
                            }}
                            disabled={isChangingPassword}
                          >
                            取消
                          </Button>
                          <Button type="submit" disabled={isChangingPassword}>
                            {isChangingPassword ? "修改中..." : "确认修改"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}

