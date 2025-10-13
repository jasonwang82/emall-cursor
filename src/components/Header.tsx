import { Link } from 'react-router-dom'
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react'
import { useStore } from '../store/useStore'
import { useState } from 'react'

export default function Header() {
  const { cart, user } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-light tracking-wider">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-sm tracking-wide hover:text-gray-600 transition-smooth">
              新品
            </Link>
            <Link to="/products?category=dress" className="text-sm tracking-wide hover:text-gray-600 transition-smooth">
              连衣裙
            </Link>
            <Link to="/products?category=tops" className="text-sm tracking-wide hover:text-gray-600 transition-smooth">
              上装
            </Link>
            <Link to="/products?category=bottoms" className="text-sm tracking-wide hover:text-gray-600 transition-smooth">
              下装
            </Link>
            <Link to="/products?category=sale" className="text-sm tracking-wide text-red-600 hover:text-red-700 transition-smooth">
              折扣
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-smooth">
              <Search size={20} />
            </button>
            <Link to={user ? '/profile' : '/login'} className="p-2 hover:bg-gray-100 rounded-full transition-smooth">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-smooth">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
            <Link
              to="/products"
              className="block py-3 text-sm tracking-wide hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              新品
            </Link>
            <Link
              to="/products?category=dress"
              className="block py-3 text-sm tracking-wide hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              连衣裙
            </Link>
            <Link
              to="/products?category=tops"
              className="block py-3 text-sm tracking-wide hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              上装
            </Link>
            <Link
              to="/products?category=bottoms"
              className="block py-3 text-sm tracking-wide hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              下装
            </Link>
            <Link
              to="/products?category=sale"
              className="block py-3 text-sm tracking-wide text-red-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              折扣
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
