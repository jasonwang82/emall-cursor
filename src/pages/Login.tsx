import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Smartphone } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里添加登录逻辑
    console.log('Login:', formData)
    navigate('/')
  }

  const handleThirdPartyLogin = (provider: string) => {
    // 这里添加第三方登录逻辑
    console.log(`Login with ${provider}`)
    alert(`${provider}登录功能开发中，敬请期待`)
  }

  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-wider mb-2">登录</h1>
          <p className="text-primary-600">欢迎回来，继续您的时尚之旅</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 邮箱 */}
          <div>
            <label className="block text-sm mb-2 tracking-wide">邮箱地址</label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400"
              />
              <input
                type="email"
                required
                className="input-field pl-12"
                placeholder="请输入邮箱地址"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* 密码 */}
          <div>
            <label className="block text-sm mb-2 tracking-wide">密码</label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400"
              />
              <input
                type="password"
                required
                className="input-field pl-12"
                placeholder="请输入密码"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          {/* 忘记密码 */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-900 transition-colors"
            >
              忘记密码？
            </button>
          </div>

          {/* 登录按钮 */}
          <button type="submit" className="w-full btn-primary">
            登录
          </button>
        </form>

        {/* 分割线 */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-primary-600">或使用以下方式登录</span>
          </div>
        </div>

        {/* 第三方登录 */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleThirdPartyLogin('微信')}
            className="w-full flex items-center justify-center px-6 py-3 border border-primary-300 hover:bg-primary-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#07C160">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
              <path d="M23.759 11.75c0-3.573-3.42-6.47-7.632-6.47-4.211 0-7.631 2.897-7.631 6.47 0 3.574 3.42 6.47 7.631 6.47a9.417 9.417 0 0 0 2.564-.361.79.79 0 0 1 .628.088l1.68.915a.314.314 0 0 0 .152.054.255.255 0 0 0 .249-.25c0-.063-.023-.123-.044-.187l-.334-1.308a.537.537 0 0 1 .188-.584c1.66-1.223 2.549-2.963 2.549-4.837zM18.058 9.388a1.03 1.03 0 0 1-1.036 1.029 1.03 1.03 0 0 1-1.037-1.029 1.03 1.03 0 0 1 1.037-1.028 1.03 1.03 0 0 1 1.036 1.028zm3.67 0a1.03 1.03 0 0 1-1.037 1.029 1.03 1.03 0 0 1-1.036-1.029 1.03 1.03 0 0 1 1.036-1.028 1.03 1.03 0 0 1 1.037 1.028z" />
            </svg>
            <span className="tracking-wide">微信登录</span>
          </button>

          <button
            type="button"
            onClick={() => handleThirdPartyLogin('支付宝')}
            className="w-full flex items-center justify-center px-6 py-3 border border-primary-300 hover:bg-primary-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1677FF">
              <path d="M9.6 9.6c-.3.3-.6.6-.6 1.2v2.4c0 .6.3.9.6 1.2.3.3.6.6 1.2.6h2.4c.6 0 .9-.3 1.2-.6.3-.3.6-.6.6-1.2v-2.4c0-.6-.3-.9-.6-1.2-.3-.3-.6-.6-1.2-.6h-2.4c-.6 0-.9.3-1.2.6z" />
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.7 15.9c-1.2.6-2.7.9-4.2.9-2.4 0-4.5-.9-6-2.4-1.2-1.2-1.8-2.7-1.8-4.2 0-2.4 1.5-4.5 3.6-5.4.9-.3 1.8-.6 2.7-.6 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5-.3 2.1-1.2 3.9-2.7 5.1z" />
            </svg>
            <span className="tracking-wide">支付宝登录</span>
          </button>

          <button
            type="button"
            onClick={() => handleThirdPartyLogin('手机号')}
            className="w-full flex items-center justify-center px-6 py-3 border border-primary-300 hover:bg-primary-50 transition-colors duration-300"
          >
            <Smartphone size={20} className="mr-2" />
            <span className="tracking-wide">手机号登录</span>
          </button>
        </div>

        {/* 注册链接 */}
        <div className="text-center mt-8">
          <p className="text-sm text-primary-600">
            还没有账号？
            <Link
              to="/register"
              className="text-primary-900 hover:text-primary-600 ml-2 transition-colors"
            >
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
