import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function PaymentPage() {
  const navigate = useNavigate()
  const { cart, clearCart } = useStore()
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat' | 'card'>('alipay')

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = total >= 299 ? 0 : 20
  const finalTotal = total + shipping

  const handlePayment = () => {
    // TODO: Integrate with payment gateway
    alert('支付功能开发中，敬请期待！')
    clearCart()
    navigate('/orders')
  }

  if (cart.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-light mb-8">选择支付方式</h1>

      <div className="max-w-2xl mx-auto">
        <div className="border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
            <span className="text-gray-600">订单金额</span>
            <span className="text-3xl font-light">¥ {finalTotal.toFixed(2)}</span>
          </div>

          <div className="space-y-3">
            {/* Alipay */}
            <label
              className={`flex items-center p-4 border-2 cursor-pointer transition-smooth ${
                paymentMethod === 'alipay' ? 'border-black bg-gray-50' : 'border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="alipay"
                checked={paymentMethod === 'alipay'}
                onChange={(e) => setPaymentMethod(e.target.value as any)}
                className="mr-4"
              />
              <div className="flex items-center flex-1">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="#1677FF">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
                </svg>
                <div>
                  <div className="font-medium">支付宝</div>
                  <div className="text-sm text-gray-600">推荐使用</div>
                </div>
              </div>
              <Smartphone size={20} className="text-gray-400" />
            </label>

            {/* WeChat Pay */}
            <label
              className={`flex items-center p-4 border-2 cursor-pointer transition-smooth ${
                paymentMethod === 'wechat' ? 'border-black bg-gray-50' : 'border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="wechat"
                checked={paymentMethod === 'wechat'}
                onChange={(e) => setPaymentMethod(e.target.value as any)}
                className="mr-4"
              />
              <div className="flex items-center flex-1">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="#09BB07">
                  <path d="M8.5 2C7.67 2 7 2.67 7 3.5V9H3.5C2.67 9 2 9.67 2 10.5V13.5C2 14.33 2.67 15 3.5 15H7V20.5C7 21.33 7.67 22 8.5 22H11.5C12.33 22 13 21.33 13 20.5V15H16.5C17.33 15 18 14.33 18 13.5V10.5C18 9.67 17.33 9 16.5 9H13V3.5C13 2.67 12.33 2 11.5 2H8.5Z"/>
                </svg>
                <div>
                  <div className="font-medium">微信支付</div>
                  <div className="text-sm text-gray-600">安全便捷</div>
                </div>
              </div>
              <Smartphone size={20} className="text-gray-400" />
            </label>

            {/* Credit Card */}
            <label
              className={`flex items-center p-4 border-2 cursor-pointer transition-smooth ${
                paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value as any)}
                className="mr-4"
              />
              <div className="flex items-center flex-1">
                <CreditCard size={32} className="mr-3 text-gray-700" />
                <div>
                  <div className="font-medium">银行卡支付</div>
                  <div className="text-sm text-gray-600">支持各大银行</div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-6 mb-6">
          <h3 className="font-medium mb-3">订单详情</h3>
          <div className="space-y-2 text-sm">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between text-gray-600">
                <span>{item.name} x {item.quantity}</span>
                <span>¥ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between text-gray-600 pt-2 border-t border-gray-200">
              <span>运费</span>
              <span>{shipping === 0 ? '免费' : `¥ ${shipping.toFixed(2)}`}</span>
            </div>
          </div>
        </div>

        <button onClick={handlePayment} className="w-full btn-primary text-lg py-4">
          确认支付 ¥ {finalTotal.toFixed(2)}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          点击支付即表示同意
          <a href="#" className="text-black hover:underline mx-1">支付协议</a>
          和
          <a href="#" className="text-black hover:underline ml-1">隐私政策</a>
        </p>
      </div>
    </div>
  )
}
