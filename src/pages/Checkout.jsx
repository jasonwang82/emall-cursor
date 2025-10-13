import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Checkout = () => {
  const navigate = useNavigate()
  const { cartItems, cartTotal, clearCart } = useCart()
  const { isAuthenticated, user } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState('alipay')
  
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || '',
    phone: '',
    province: '',
    city: '',
    district: '',
    address: '',
    postalCode: ''
  })

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }

  if (cartItems.length === 0) {
    navigate('/cart')
    return null
  }

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mock order creation
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cartItems,
      total: cartTotal,
      shippingInfo,
      paymentMethod,
      status: 'pending'
    }

    // Save to localStorage (in real app, this would be sent to backend)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.unshift(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    clearCart()
    alert('订单提交成功！')
    navigate('/orders')
  }

  const paymentMethods = [
    {
      id: 'alipay',
      name: '支付宝',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1677FF">
          <path d="M18.098 23.999c3.446-1.204 5.902-4.503 5.902-8.387 0-4.902-3.973-8.875-8.875-8.875-4.902 0-8.875 3.973-8.875 8.875 0 3.884 2.456 7.183 5.902 8.387h5.946zm-3.821-5.288c-.483-.216-.841-.432-1.199-.647-.808-.485-1.616-.97-2.424-1.455-1.345.808-2.69 1.616-4.035 2.424-.161.081-.322.081-.483 0-.161-.161-.161-.322 0-.483l2.906-3.551c-.646-.539-1.292-1.078-1.938-1.616-.161-.161-.161-.322 0-.483.161-.161.322-.161.483 0 .646.539 1.292 1.078 1.938 1.616l2.424-2.963c.161-.161.322-.161.483 0 .161.161.161.322 0 .483l-2.424 2.963c.808.485 1.616.97 2.424 1.455.358.215.716.431 1.199.647.161.081.322.242.322.404 0 .242-.161.403-.322.403-.161.081-.242 0-.354-.081z"/>
        </svg>
      )
    },
    {
      id: 'wechat',
      name: '微信支付',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#07C160">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
      )
    },
    {
      id: 'card',
      name: '银行卡',
      icon: <CreditCard size={24} />
    }
  ]

  const provinces = ['北京市', '上海市', '广东省', '浙江省', '江苏省', '四川省', '湖北省', '河南省']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-light tracking-wide mb-8">结算</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping & Payment Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <div className="border border-primary-lightgray p-6">
            <h2 className="text-xl font-light tracking-wide mb-6">配送地址</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">收货人姓名 *</label>
                <input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">手机号码 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                  pattern="[0-9]{11}"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">省份 *</label>
                <select
                  name="province"
                  value={shippingInfo.province}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">请选择省份</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">城市 *</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">区/县 *</label>
                <input
                  type="text"
                  name="district"
                  value={shippingInfo.district}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">邮政编码</label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleInputChange}
                  className="input-field"
                  pattern="[0-9]{6}"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">详细地址 *</label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="街道、门牌号、楼层等"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-primary-lightgray p-6">
            <h2 className="text-xl font-light tracking-wide mb-6">支付方式</h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center space-x-3 p-4 border cursor-pointer transition-colors ${
                    paymentMethod === method.id
                      ? 'border-primary-black bg-primary-beige'
                      : 'border-primary-lightgray hover:border-primary-black'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                  <div className="flex items-center space-x-3 flex-1">
                    {method.icon}
                    <span className="font-medium">{method.name}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-primary-lightgray p-6 sticky top-24">
            <h2 className="text-xl font-light tracking-wide mb-6">订单摘要</h2>

            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-3">
                  <img
                    src={item.image || item.images?.[0]}
                    alt={item.name}
                    className="w-16 h-20 object-cover"
                  />
                  <div className="flex-1 text-sm">
                    <p className="font-medium mb-1">{item.name}</p>
                    <p className="text-primary-gray text-xs mb-1">
                      {item.size} × {item.quantity}
                    </p>
                    <p className="font-medium">¥ {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 border-t border-primary-lightgray pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-primary-gray">商品小计</span>
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

            <button type="submit" className="btn-primary w-full">
              确认支付
            </button>

            <div className="mt-6 pt-6 border-t border-primary-lightgray">
              <div className="flex items-start space-x-2 text-xs text-primary-gray">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>您的付款信息受到安全保护</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Checkout
