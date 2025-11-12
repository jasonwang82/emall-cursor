'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, ShoppingBag } from 'lucide-react'

// Mock cart data
const initialCartItems = [
  {
    id: '1',
    name: '纯色圆领T恤',
    price: 199,
    color: '黑色',
    size: 'M',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
  },
  {
    id: '2',
    name: '高腰阔腿裤',
    price: 399,
    color: '米色',
    size: 'S',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80'
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 299 ? 0 : 20
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
        <h2 className="text-2xl font-light tracking-wide mb-4">购物车是空的</h2>
        <p className="text-gray-600 mb-8">快去挑选心仪的商品吧</p>
        <Link href="/products" className="btn-primary inline-block">
          开始购物
        </Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
        购物车
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-6 border-b border-gray-200"
              >
                <Link
                  href={`/products/${item.id}`}
                  className="relative w-24 h-32 bg-gray-100 flex-shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <Link
                      href={`/products/${item.id}`}
                      className="font-light tracking-wide hover:opacity-70 transition-opacity"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="删除"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    颜色：{item.color} | 尺码：{item.size}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-medium">¥{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-block mt-6 text-sm hover:opacity-70 transition-opacity"
          >
            ← 继续购物
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-6">订单摘要</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">小计</span>
                <span>¥{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">运费</span>
                <span>{shipping === 0 ? '免运费' : `¥${shipping}`}</span>
              </div>
              {subtotal < 299 && shipping > 0 && (
                <p className="text-xs text-gray-500">
                  还差 ¥{299 - subtotal} 即可享受免运费
                </p>
              )}
            </div>

            <div className="flex justify-between text-lg font-medium mb-6 pt-4 border-t border-gray-300">
              <span>总计</span>
              <span>¥{total}</span>
            </div>

            <Link href="/checkout" className="btn-primary w-full text-center block">
              去结算
            </Link>

            <div className="mt-6 text-xs text-gray-600 space-y-2">
              <p>• 支持支付宝、微信支付、银行卡</p>
              <p>• 30天无理由退换</p>
              <p>• 顺丰包邮，2-5天送达</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
