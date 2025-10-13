import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login:', { email, password })
    navigate('/')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-2">登录账户</h1>
          <p className="text-gray-600">欢迎回来</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">邮箱地址</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-12"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">密码</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-12"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">记住我</span>
            </label>
            <a href="#" className="text-sm hover:underline">
              忘记密码？
            </a>
          </div>

          <button type="submit" className="w-full btn-primary">
            登录
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">或使用以下方式登录</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 hover:bg-gray-50 transition-smooth">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#09BB07">
                <path d="M8.5 2C7.67 2 7 2.67 7 3.5V9H3.5C2.67 9 2 9.67 2 10.5V13.5C2 14.33 2.67 15 3.5 15H7V20.5C7 21.33 7.67 22 8.5 22H11.5C12.33 22 13 21.33 13 20.5V15H16.5C17.33 15 18 14.33 18 13.5V10.5C18 9.67 17.33 9 16.5 9H13V3.5C13 2.67 12.33 2 11.5 2H8.5Z"/>
              </svg>
              <span>微信登录</span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 hover:bg-gray-50 transition-smooth">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1677FF">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
              </svg>
              <span>支付宝登录</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          还没有账户？
          <Link to="/register" className="text-black font-medium ml-1 hover:underline">
            立即注册
          </Link>
        </p>
      </div>
    </div>
  )
}
