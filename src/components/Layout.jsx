import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, User, Menu, X, Search, Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    { name: '首页', href: '/' },
    { name: '新品', href: '/products?filter=new' },
    { name: '连衣裙', href: '/products?category=dress' },
    { name: '上装', href: '/products?category=tops' },
    { name: '下装', href: '/products?category=bottoms' },
    { name: '外套', href: '/products?category=outerwear' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 border-b border-primary-lightgray">
        {/* Top Banner */}
        <div className="bg-primary-black text-white text-center py-2 px-4">
          <p className="text-xs md:text-sm tracking-wide">全场包邮 | 新用户享8折优惠</p>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-light tracking-widest">FASHION</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium tracking-wide hover:text-primary-gray"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-primary-gray">
                <Search size={20} />
              </button>
              <button className="p-2 hover:text-primary-gray hidden sm:block">
                <Heart size={20} />
              </button>
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="p-2 hover:text-primary-gray">
                    <User size={20} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-primary-lightgray shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-primary-beige">
                      我的订单
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-primary-beige"
                    >
                      退出登录
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="p-2 hover:text-primary-gray">
                  <User size={20} />
                </Link>
              )}
              <Link to="/cart" className="p-2 hover:text-primary-gray relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary-lightgray">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium tracking-wide hover:text-primary-gray"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-light tracking-widest mb-4">FASHION</h3>
              <p className="text-sm text-gray-400">
                时尚女装 · 简约优雅<br />
                品质生活从这里开始
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide mb-4 uppercase">客户服务</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-white">联系我们</Link></li>
                <li><a href="#" className="hover:text-white">配送信息</a></li>
                <li><a href="#" className="hover:text-white">退换货政策</a></li>
                <li><a href="#" className="hover:text-white">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide mb-4 uppercase">关于我们</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">品牌故事</a></li>
                <li><a href="#" className="hover:text-white">门店查询</a></li>
                <li><a href="#" className="hover:text-white">招聘信息</a></li>
                <li><a href="#" className="hover:text-white">隐私政策</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide mb-4 uppercase">关注我们</h4>
              <p className="text-sm text-gray-400 mb-4">订阅邮件获取最新优惠</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="邮箱地址"
                  className="flex-1 px-4 py-2 bg-white text-black text-sm focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200">
                  订阅
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Fashion Store. 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
