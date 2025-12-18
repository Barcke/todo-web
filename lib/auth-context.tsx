"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { User, LoginRequest, RegisterRequest, UpdateProfileRequest, ChangePasswordRequest } from "@/types/user"
import { apiClient, getToken, setToken, clearToken } from "@/lib/api-client"

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (data: LoginRequest) => Promise<void>
  register: (data: RegisterRequest) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: UpdateProfileRequest) => Promise<void>
  changePassword: (data: ChangePasswordRequest) => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // 初始化时检查是否有 token 并获取用户信息
  useEffect(() => {
    const initAuth = async () => {
      const token = getToken()
      if (token) {
        try {
          const response = await apiClient.getProfile()
          setUser(response.data)
        } catch (error) {
          // Token 无效，清除
          clearToken()
        }
      }
      setLoading(false)
    }

    initAuth()
  }, [])

  // 登录
  const login = useCallback(async (data: LoginRequest) => {
    const response = await apiClient.login(data)
    setToken(response.data.token)
    setUser(response.data.user)
  }, [])

  // 注册
  const register = useCallback(async (data: RegisterRequest) => {
    await apiClient.register(data)
    // 注册成功后自动登录
    await login(data)
  }, [login])

  // 登出
  const logout = useCallback(async () => {
    try {
      await apiClient.logout()
    } catch (error) {
      // 即使登出失败也清除本地状态
    } finally {
      clearToken()
      setUser(null)
      router.push("/login")
    }
  }, [router])

  // 更新用户信息
  const updateProfile = useCallback(async (data: UpdateProfileRequest) => {
    const response = await apiClient.updateProfile(data)
    setUser(response.data)
  }, [])

  // 修改密码
  const changePassword = useCallback(async (data: ChangePasswordRequest) => {
    await apiClient.changePassword(data)
  }, [])

  // 刷新用户信息
  const refreshUser = useCallback(async () => {
    try {
      const response = await apiClient.getProfile()
      setUser(response.data)
    } catch (error) {
      // 如果获取失败，清除状态
      clearToken()
      setUser(null)
    }
  }, [])

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    refreshUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

