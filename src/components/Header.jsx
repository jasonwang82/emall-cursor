import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const cartCount = getCartCount()

  const handleUserClick = () => {
    if (user) {
      // 显示用户菜单或跳转到订单页面
      navigate('/orders')
    } else {
      navigate('/login')
    }
  }

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container-custom">
        {/* Top banner */}
        <div className="text-center py-2 text-xs md:text-sm text-neutral-600 border-b border-neutral-100">
          新用户注册立享 8.5 折优惠 | 全场包邮
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-light tracking-widest">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">
              新品上市
            </Link>
            <Link to="/products?category=clothing" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">
              服装
            </Link>
            <Link to="/products?category=accessories" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">
              配饰
            </Link>
            <Link to="/products?sale=true" className="text-sm tracking-wide hover:text-neutral-600 transition-colors text-red-600">
              特惠专区
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="p-2 hover:text-neutral-600 transition-colors" aria-label="搜索">
              <Search size={20} />
            </button>
            <button
              onClick={handleUserClick}
              className="p-2 hover:text-neutral-600 transition-colors"
              aria-label="用户"
            >
              <User size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:text-neutral-600 transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-sm tracking-wide hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                新品上市
              </Link>
              <Link
                to="/products?category=clothing"
                className="text-sm tracking-wide hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                服装
              </Link>
              <Link
                to="/products?category=accessories"
                className="text-sm tracking-wide hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                配饰
              </Link>
              <Link
                to="/products?sale=true"
                className="text-sm tracking-wide hover:text-neutral-600 transition-colors text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                特惠专区
              </Link>
              <Link
                to="/contact"
                className="text-sm tracking-wide hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我们
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
