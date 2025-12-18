import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

// 模拟购物车数据
const initialCartItems = [
  {
    id: 1,
    name: '羊绒混纺大衣',
    price: 899,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=250&fit=crop',
    size: 'M',
    color: '黑色',
    quantity: 1,
  },
  {
    id: 2,
    name: '真丝衬衫',
    price: 459,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=200&h=250&fit=crop',
    size: 'S',
    color: '白色',
    quantity: 2,
  },
]

export default function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal >= 99 ? 0 : 15
  const total = subtotal + shipping

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('购物车为空')
      return
    }
    navigate('/checkout')
  }

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 md:py-24">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto mb-6 text-primary-300" />
          <h2 className="text-2xl font-light tracking-wider mb-4">购物车是空的</h2>
          <p className="text-primary-600 mb-8">
            快去选购您喜欢的商品吧
          </p>
          <Link to="/products" className="btn-primary inline-block">
            开始购物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-8">
        购物车
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 购物车商品列表 */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-primary-200 hover:border-primary-300 transition-colors"
              >
                {/* 商品图片 */}
                <Link to={`/products/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 object-cover"
                  />
                </Link>

                {/* 商品信息 */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/products/${item.id}`}
                      className="text-lg font-medium hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <div className="text-sm text-primary-600 mt-1">
                      <p>颜色：{item.color}</p>
                      <p>尺码：{item.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* 数量调整 */}
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 border border-primary-300 hover:bg-primary-50 transition-colors"
                        aria-label="减少数量"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 border-t border-b border-primary-300 min-w-[60px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 border border-primary-300 hover:bg-primary-50 transition-colors"
                        aria-label="增加数量"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* 价格和删除 */}
                    <div className="flex items-center gap-4">
                      <span className="font-medium">¥{item.price * item.quantity}</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-primary-600 hover:text-red-600 transition-colors"
                        aria-label="删除"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 继续购物 */}
          <div className="mt-6">
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-900 transition-colors"
            >
              ← 继续购物
            </Link>
          </div>
        </div>

        {/* 订单摘要 */}
        <div className="lg:col-span-1">
          <div className="border border-primary-200 p-6 sticky top-24">
            <h2 className="text-xl font-light tracking-wider mb-6">订单摘要</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-primary-600">
                <span>商品小计</span>
                <span>¥{subtotal}</span>
              </div>
              <div className="flex justify-between text-primary-600">
                <span>运费</span>
                <span>{shipping === 0 ? '免费' : `¥${shipping}`}</span>
              </div>
              {subtotal < 99 && (
                <p className="text-xs text-primary-600">
                  再买 ¥{99 - subtotal} 即可免运费
                </p>
              )}
            </div>

            <div className="border-t border-primary-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-medium">
                <span>总计</span>
                <span>¥{total}</span>
              </div>
            </div>

            <button onClick={handleCheckout} className="w-full btn-primary mb-4">
              去结算
            </button>

            {/* 安全提示 */}
            <div className="text-xs text-center text-primary-600">
              <p>支持支付宝、微信支付、银行卡支付</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
