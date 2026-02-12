import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16">
          <ShoppingBag size={64} className="mx-auto text-primary-gray mb-4" />
          <h2 className="text-2xl font-light tracking-wide mb-4">购物车是空的</h2>
          <p className="text-primary-gray mb-8">快去挑选心仪的商品吧</p>
          <Link to="/products" className="btn-primary inline-block">
            继续购物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-light tracking-wide mb-8">购物车</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4 p-4 border border-primary-lightgray hover:shadow-md transition-shadow"
            >
              <Link to={`/product/${item.id}`} className="flex-shrink-0 w-24 h-32 md:w-32 md:h-40">
                <img
                  src={item.image || item.images?.[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/product/${item.id}`} className="hover:text-primary-gray">
                    <h3 className="font-medium mb-1">{item.name}</h3>
                  </Link>
                  <p className="text-sm text-primary-gray mb-2">尺码: {item.size}</p>
                  <p className="text-lg font-medium">¥ {item.price}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="w-8 h-8 border border-primary-lightgray hover:border-primary-black flex items-center justify-center"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="w-8 h-8 border border-primary-lightgray hover:border-primary-black flex items-center justify-center"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-primary-gray hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-primary-lightgray p-6 sticky top-24">
            <h2 className="text-xl font-light tracking-wide mb-6">订单摘要</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-primary-gray">小计</span>
                <span>¥ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-primary-gray">配送费</span>
                <span className="text-green-600">免费</span>
              </div>
              <div className="border-t border-primary-lightgray pt-3">
                <div className="flex justify-between text-lg font-medium">
                  <span>总计</span>
                  <span>¥ {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link to="/checkout" className="btn-primary w-full block text-center mb-3">
              去结算
            </Link>
            <Link to="/products" className="btn-secondary w-full block text-center">
              继续购物
            </Link>

            <div className="mt-6 pt-6 border-t border-primary-lightgray">
              <div className="flex items-start space-x-2 text-xs text-primary-gray">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>所有交易均经过安全加密处理</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
