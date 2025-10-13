import { useState } from 'react'
import { User, Mail, Phone, MapPin, Heart, Package, Settings, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function ProfilePage() {
  const navigate = useNavigate()
  const { user, setUser } = useStore()
  const [activeTab, setActiveTab] = useState<'info' | 'addresses' | 'favorites'>('info')

  // Redirect if not logged in
  if (!user) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <User size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-light mb-2">请先登录</h2>
          <p className="text-gray-600 mb-8">登录后即可查看个人信息</p>
          <Link to="/login" className="btn-primary inline-block">
            去登录
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-light mb-8">个人中心</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={32} className="text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <Link
              to="/orders"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-smooth"
            >
              <Package size={20} />
              <span>我的订单</span>
            </Link>
            <button
              onClick={() => setActiveTab('info')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-smooth ${
                activeTab === 'info' ? 'bg-gray-50' : ''
              }`}
            >
              <User size={20} />
              <span>个人信息</span>
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-smooth ${
                activeTab === 'addresses' ? 'bg-gray-50' : ''
              }`}
            >
              <MapPin size={20} />
              <span>收货地址</span>
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-smooth ${
                activeTab === 'favorites' ? 'bg-gray-50' : ''
              }`}
            >
              <Heart size={20} />
              <span>我的收藏</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-smooth">
              <Settings size={20} />
              <span>账户设置</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-smooth"
            >
              <LogOut size={20} />
              <span>退出登录</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-3">
          {activeTab === 'info' && (
            <div className="border border-gray-200 p-6">
              <h2 className="text-xl font-medium mb-6">个人信息</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">手机号</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      placeholder="未绑定"
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  保存修改
                </button>
              </form>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium">收货地址</h2>
                <button className="btn-secondary">
                  添加新地址
                </button>
              </div>
              <div className="text-center py-12">
                <MapPin size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="text-gray-500">暂无收货地址</p>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="border border-gray-200 p-6">
              <h2 className="text-xl font-medium mb-6">我的收藏</h2>
              <div className="text-center py-12">
                <Heart size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="text-gray-500">暂无收藏商品</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
