import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User as UserIcon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('两次输入的密码不一致')
      return
    }
    // Mock registration - in real app, this would call an API
    login({
      email: formData.email,
      name: formData.name,
      id: Date.now()
    })
    navigate('/')
  }

  const handleSocialRegister = (provider) => {
    // Mock social registration
    login({
      email: `${provider}@user.com`,
      name: `${provider}用户`,
      id: Date.now(),
      provider
    })
    navigate('/')
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light tracking-wide mb-2">注册</h2>
          <p className="text-primary-gray">加入我们，开启时尚之旅</p>
          <div className="mt-4 bg-primary-beige px-4 py-3 text-sm">
            <p className="text-primary-navy">🎉 新用户专享8折优惠</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div>
            <label className="block text-sm mb-2">用户名</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-gray" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="请输入用户名"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">邮箱地址</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-gray" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="请输入邮箱"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">密码</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-gray" size={20} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="请输入密码"
                required
                minLength="6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">确认密码</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-gray" size={20} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="请再次输入密码"
                required
                minLength="6"
              />
            </div>
          </div>

          <div className="flex items-start text-sm">
            <input type="checkbox" className="mt-1 mr-2" required />
            <span className="text-primary-gray">
              我已阅读并同意
              <a href="#" className="text-primary-black hover:underline ml-1">用户协议</a>
              和
              <a href="#" className="text-primary-black hover:underline ml-1">隐私政策</a>
            </span>
          </div>

          <button type="submit" className="btn-primary w-full">
            注册
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary-lightgray"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-primary-gray">或使用以下方式注册</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleSocialRegister('wechat')}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 border border-primary-lightgray hover:border-primary-black transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#07C160">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
            <span className="text-sm font-medium">微信注册</span>
          </button>

          <button
            onClick={() => handleSocialRegister('alipay')}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 border border-primary-lightgray hover:border-primary-black transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1677FF">
              <path d="M18.098 23.999c3.446-1.204 5.902-4.503 5.902-8.387 0-4.902-3.973-8.875-8.875-8.875-4.902 0-8.875 3.973-8.875 8.875 0 3.884 2.456 7.183 5.902 8.387h5.946zm-3.821-5.288c-.483-.216-.841-.432-1.199-.647-.808-.485-1.616-.97-2.424-1.455-1.345.808-2.69 1.616-4.035 2.424-.161.081-.322.081-.483 0-.161-.161-.161-.322 0-.483l2.906-3.551c-.646-.539-1.292-1.078-1.938-1.616-.161-.161-.161-.322 0-.483.161-.161.322-.161.483 0 .646.539 1.292 1.078 1.938 1.616l2.424-2.963c.161-.161.322-.161.483 0 .161.161.161.322 0 .483l-2.424 2.963c.808.485 1.616.97 2.424 1.455.358.215.716.431 1.199.647.161.081.322.242.322.404 0 .242-.161.403-.322.403-.161.081-.242 0-.354-.081z"/>
            </svg>
            <span className="text-sm font-medium">支付宝注册</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          <span className="text-primary-gray">已有账号？</span>
          <Link to="/login" className="ml-2 text-primary-black font-medium hover:underline">
            立即登录
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
