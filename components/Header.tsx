'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider hover:opacity-70 transition-opacity">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products?category=new" className="text-sm tracking-wide text-link">
              新品上市
            </Link>
            <Link href="/products?category=tops" className="text-sm tracking-wide text-link">
              上衣
            </Link>
            <Link href="/products?category=dresses" className="text-sm tracking-wide text-link">
              连衣裙
            </Link>
            <Link href="/products?category=bottoms" className="text-sm tracking-wide text-link">
              裤装
            </Link>
            <Link href="/products?category=sale" className="text-sm tracking-wide text-link text-red-600">
              特惠
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:opacity-70 transition-opacity"
              aria-label="搜索"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="hover:opacity-70 transition-opacity" aria-label="用户">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="hover:opacity-70 transition-opacity relative" aria-label="购物车">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:opacity-70 transition-opacity"
              aria-label="菜单"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200 animate-[fadeIn_0.3s_ease-in-out]">
            <input
              type="text"
              placeholder="搜索商品..."
              className="w-full px-4 py-2 border border-gray-300 focus:border-black transition-colors"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-[slideDown_0.3s_ease-out]">
          <nav className="container-custom py-4 space-y-4">
            <Link 
              href="/products?category=new" 
              className="block py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              新品上市
            </Link>
            <Link 
              href="/products?category=tops" 
              className="block py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              上衣
            </Link>
            <Link 
              href="/products?category=dresses" 
              className="block py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              连衣裙
            </Link>
            <Link 
              href="/products?category=bottoms" 
              className="block py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              裤装
            </Link>
            <Link 
              href="/products?category=sale" 
              className="block py-2 text-sm tracking-wide hover:opacity-70 transition-opacity text-red-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              特惠
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
