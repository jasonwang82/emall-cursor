import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, User as UserIcon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('两次输入的密码不一致')
      return
    }

    // 模拟登录/注册
    const userData = {
      email: formData.email,
      name: formData.name || formData.email.split('@')[0],
    }
    
    login(userData)
    navigate('/')
  }

  const handleSocialLogin = (provider) => {
    // 模拟第三方登录
    const userData = {
      email: `user@${provider}.com`,
      name: `${provider}用户`,
      loginMethod: provider
    }
    
    login(userData)
    navigate('/')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-neutral-50">
      <div className="bg-white max-w-md w-full p-8 md:p-12 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-light text-center mb-8 tracking-wide">
          {isLogin ? '登录账户' : '注册新账户'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-2 text-neutral-700">姓名</label>
              <div className="relative">
                <UserIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field pl-10"
                  placeholder="请输入您的姓名"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-2 text-neutral-700">邮箱</label>
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-700">密码</label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="请输入密码"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm mb-2 text-neutral-700">确认密码</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input-field pl-10"
                  placeholder="再次输入密码"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-neutral-600">记住我</span>
              </label>
              <a href="#" className="text-neutral-600 hover:text-primary">
                忘记密码？
              </a>
            </div>
          )}

          <button type="submit" className="btn-primary w-full">
            {isLogin ? '登录' : '注册'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">或使用以下方式</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('wechat')}
              className="flex items-center justify-center px-4 py-3 border border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#09BB07">
                <path d="M8.5 9.5C8.5 8.67157 9.17157 8 10 8C10.8284 8 11.5 8.67157 11.5 9.5C11.5 10.3284 10.8284 11 10 11C9.17157 11 8.5 10.3284 8.5 9.5Z"/>
                <path d="M5.5 9.5C5.5 8.67157 6.17157 8 7 8C7.82843 8 8.5 8.67157 8.5 9.5C8.5 10.3284 7.82843 11 7 11C6.17157 11 5.5 10.3284 5.5 9.5Z"/>
                <path d="M9 3C5.13401 3 2 5.91015 2 9.5C2 11.4649 2.89482 13.2268 4.30964 14.4533L3.5 17.5L6.87903 15.7032C7.54748 15.8958 8.26 16 9 16C9.07066 16 9.14112 15.9992 9.21138 15.9977C9.07302 15.5454 9 15.0632 9 14.5652C9 11.4836 11.4624 9 14.5 9C15.1483 9 15.7736 9.10384 16.3589 9.29526C15.5683 5.76578 12.5924 3 9 3Z"/>
                <path d="M22 14.5652C22 16.9686 20.0902 18.9464 17.6486 19.3915L20 21L19.4 18.6304C18.4065 19.3152 17.1673 19.7391 15.8261 19.7391C13.0145 19.7391 10.7391 17.4638 10.7391 14.6522C10.7391 11.8406 13.0145 9.56522 15.8261 9.56522C18.6377 9.56522 20.913 11.8406 20.913 14.6522C20.913 14.6232 22 14.5652 22 14.5652Z"/>
                <circle cx="14.5" cy="14.5" r="1"/>
                <circle cx="17.5" cy="14.5" r="1"/>
              </svg>
              <span className="text-sm">微信</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('alipay')}
              className="flex items-center justify-center px-4 py-3 border border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1678FF">
                <path d="M5.4 21.6h13.2c1.98 0 3.6-1.62 3.6-3.6V6c0-1.98-1.62-3.6-3.6-3.6H5.4C3.42 2.4 1.8 4.02 1.8 6v12c0 1.98 1.62 3.6 3.6 3.6zm14.76-6.72c-1.44.72-3.42 1.5-5.58 1.98.96-1.26 1.68-2.64 2.16-4.02h-3.18v-1.2h4.32v-.84h-4.32V9.6h3.48c-.12-.48-.3-.96-.54-1.44h-6.9V6.96h3.48v-.84H9.24v.84h3.48v1.2h-6.9c.24.48.42.96.54 1.44h3.48v1.2H5.52v.84h4.32v1.2H6.66c.48 1.38 1.2 2.76 2.16 4.02-2.16-.48-4.14-1.26-5.58-1.98-.72 1.32-.96 2.64-.96 3.48 0 .84.84 1.68 2.16 1.68.84 0 1.8-.36 2.76-.96 1.14-.72 2.28-1.8 3.36-3.12 1.08 1.32 2.22 2.4 3.36 3.12.96.6 1.92.96 2.76.96 1.32 0 2.16-.84 2.16-1.68 0-.84-.24-2.16-.96-3.48z"/>
              </svg>
              <span className="text-sm">支付宝</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <span className="text-neutral-600">
            {isLogin ? '还没有账户？' : '已有账户？'}
          </span>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-primary hover:underline font-medium"
          >
            {isLogin ? '立即注册' : '立即登录'}
          </button>
        </div>

        {!isLogin && (
          <p className="mt-6 text-xs text-neutral-500 text-center leading-relaxed">
            注册即表示您同意我们的
            <a href="#" className="text-primary hover:underline">服务条款</a>
            和
            <a href="#" className="text-primary hover:underline">隐私政策</a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
