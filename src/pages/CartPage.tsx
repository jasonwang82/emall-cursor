import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function CartPage() {
  const navigate = useNavigate()
  const { cart, removeFromCart, updateQuantity } = useStore()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? (subtotal >= 299 ? 0 : 20) : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-light mb-2">购物车是空的</h2>
          <p className="text-gray-600 mb-8">快去挑选心仪的商品吧</p>
          <Link to="/products" className="btn-primary inline-block">
            去购物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-light mb-8">购物车</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex gap-4 border border-gray-200 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {item.selectedColor && <span>颜色: {item.selectedColor} </span>}
                  {item.selectedSize && <span>/ 尺码: {item.selectedSize}</span>}
                </p>
                <p className="font-medium mb-4">¥ {item.price.toFixed(2)}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-smooth"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-smooth"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-500 hover:text-red-600 transition-smooth"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-6">订单摘要</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>小计</span>
                <span>¥ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>运费</span>
                <span>{shipping === 0 ? '免费' : `¥ ${shipping.toFixed(2)}`}</span>
              </div>
              {subtotal > 0 && subtotal < 299 && (
                <p className="text-sm text-gray-500">
                  再购 ¥{(299 - subtotal).toFixed(2)} 即可免运费
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-medium">
                <span>总计</span>
                <span>¥ {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full btn-primary mb-3"
            >
              去结算
            </button>
            <Link
              to="/products"
              className="block text-center text-sm text-gray-600 hover:text-black transition-smooth"
            >
              继续购物
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
