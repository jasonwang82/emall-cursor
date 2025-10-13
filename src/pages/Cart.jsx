import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag size={64} className="mx-auto text-neutral-300 mb-6" />
          <h2 className="text-2xl font-light mb-4">购物车是空的</h2>
          <p className="text-neutral-600 mb-8">
            还没有添加任何商品，去看看有什么喜欢的吧
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
      <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12">
        购物车
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 商品列表 */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 bg-white border border-neutral-200 p-4"
              >
                {/* 商品图片 */}
                <Link
                  to={`/product/${item.id}`}
                  className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0"
                >
                  <img
                    src={item.image || item.images?.[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* 商品信息 */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="font-light text-lg mb-2 hover:text-neutral-600 block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-neutral-600 mb-2">
                      尺码: {item.size}
                    </p>
                    <p className="text-lg font-medium">¥ {item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* 数量控制 */}
                    <div className="flex items-center border border-neutral-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="w-8 h-8 hover:bg-neutral-100 transition-colors"
                        aria-label="减少数量"
                      >
                        <Minus size={16} className="mx-auto" />
                      </button>
                      <span className="w-12 text-center border-x border-neutral-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-8 h-8 hover:bg-neutral-100 transition-colors"
                        aria-label="增加数量"
                      >
                        <Plus size={16} className="mx-auto" />
                      </button>
                    </div>

                    {/* 删除按钮 */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-neutral-500 hover:text-red-600 transition-colors p-2"
                      aria-label="删除商品"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 订单摘要 */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-50 p-6 sticky top-24">
            <h2 className="text-xl font-light mb-6">订单摘要</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">商品小计</span>
                <span>¥ {getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">运费</span>
                <span className="text-green-600">免费</span>
              </div>
              <div className="border-t border-neutral-200 pt-3 flex justify-between font-medium text-lg">
                <span>合计</span>
                <span>¥ {getCartTotal()}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="btn-primary w-full mb-3"
            >
              去结算
            </button>

            <Link
              to="/products"
              className="btn-secondary w-full text-center block"
            >
              继续购物
            </Link>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="text-sm font-medium mb-3">购物保障</h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>全场包邮，48小时内发货</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>7天无理由退换</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>100%正品保证</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
