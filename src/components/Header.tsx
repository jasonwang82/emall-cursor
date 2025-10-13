import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-50">
      {/* 顶部公告栏 */}
      <div className="bg-primary-900 text-white text-center py-2 text-sm">
        <p>新用户注册立享8折优惠 | 全场包邮</p>
      </div>

      {/* 主导航栏 */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="菜单"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-light tracking-[0.2em] text-primary-900">
            FASHION
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm tracking-wider hover:text-primary-600 transition-colors">
              首页
            </Link>
            <Link to="/products" className="text-sm tracking-wider hover:text-primary-600 transition-colors">
              全部商品
            </Link>
            <Link to="/products?category=new" className="text-sm tracking-wider hover:text-primary-600 transition-colors">
              新品上市
            </Link>
            <Link to="/products?category=sale" className="text-sm tracking-wider hover:text-primary-600 transition-colors">
              热销推荐
            </Link>
          </nav>

          {/* 右侧图标 */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-primary-600 transition-colors" aria-label="搜索">
              <Search size={20} />
            </button>
            <Link to="/login" className="p-2 hover:text-primary-600 transition-colors" aria-label="用户">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2 hover:text-primary-600 transition-colors relative" aria-label="购物车">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm tracking-wider hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                to="/products"
                className="text-sm tracking-wider hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                全部商品
              </Link>
              <Link
                to="/products?category=new"
                className="text-sm tracking-wider hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                新品上市
              </Link>
              <Link
                to="/products?category=sale"
                className="text-sm tracking-wider hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                热销推荐
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
