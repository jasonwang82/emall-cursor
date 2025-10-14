'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Mail, Lock, User as UserIcon } from 'lucide-react'

function LoginForm() {
  const searchParams = useSearchParams()
  const isRegisterMode = searchParams.get('register') === 'true'
  
  const [isRegister, setIsRegister] = useState(isRegisterMode)
  const [loginMethod, setLoginMethod] = useState<'email' | 'wechat' | 'alipay'>('email')

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-wider mb-2">
            {isRegister ? '注册账号' : '欢迎回来'}
          </h1>
          <p className="text-gray-600">
            {isRegister ? '创建您的账号，开启购物之旅' : '登录您的账号'}
          </p>
        </div>

        {/* Login Method Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-3 text-sm transition-colors ${
              loginMethod === 'email'
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            邮箱登录
          </button>
          <button
            onClick={() => setLoginMethod('wechat')}
            className={`flex-1 py-3 text-sm transition-colors ${
              loginMethod === 'wechat'
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            微信登录
          </button>
          <button
            onClick={() => setLoginMethod('alipay')}
            className={`flex-1 py-3 text-sm transition-colors ${
              loginMethod === 'alipay'
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            支付宝登录
          </button>
        </div>

        {/* Email Login/Register Form */}
        {loginMethod === 'email' && (
          <form className="space-y-6">
            {isRegister && (
              <div>
                <label className="block text-sm mb-2">用户名</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="请输入用户名"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black transition-colors"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm mb-2">邮箱</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="请输入邮箱"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">密码</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="请输入密码"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black transition-colors"
                />
              </div>
            </div>

            {isRegister && (
              <div>
                <label className="block text-sm mb-2">确认密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="请再次输入密码"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black transition-colors"
                  />
                </div>
              </div>
            )}

            {!isRegister && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600">记住我</span>
                </label>
                <Link href="/forgot-password" className="text-link">
                  忘记密码？
                </Link>
              </div>
            )}

            {isRegister && (
              <div className="text-sm text-gray-600">
                <label className="flex items-start">
                  <input type="checkbox" className="mr-2 mt-1" required />
                  <span>
                    我已阅读并同意
                    <Link href="/terms" className="text-black underline">《服务条款》</Link>
                    和
                    <Link href="/privacy" className="text-black underline">《隐私政策》</Link>
                  </span>
                </label>
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              {isRegister ? '注册' : '登录'}
            </button>
          </form>
        )}

        {/* WeChat Login */}
        {loginMethod === 'wechat' && (
          <div className="text-center py-12">
            <div className="w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center mb-4">
              <p className="text-gray-500">微信扫码登录</p>
            </div>
            <p className="text-sm text-gray-600">
              请使用微信扫描二维码登录
            </p>
          </div>
        )}

        {/* Alipay Login */}
        {loginMethod === 'alipay' && (
          <div className="text-center py-12">
            <div className="w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center mb-4">
              <p className="text-gray-500">支付宝扫码登录</p>
            </div>
            <p className="text-sm text-gray-600">
              请使用支付宝扫描二维码登录
            </p>
          </div>
        )}

        {/* Toggle Register/Login */}
        {loginMethod === 'email' && (
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">
              {isRegister ? '已有账号？' : '还没有账号？'}
            </span>
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="ml-2 text-black underline hover:opacity-70 transition-opacity"
            >
              {isRegister ? '立即登录' : '立即注册'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
