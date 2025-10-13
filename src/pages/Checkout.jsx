import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    province: '',
    city: '',
    district: '',
    address: '',
    zipCode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('alipay')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 验证表单
    if (!formData.name || !formData.phone || !formData.address) {
      alert('请填写完整的收货信息')
      return
    }

    // 模拟订单创建
    const order = {
      id: Date.now(),
      items: cart,
      total: getCartTotal(),
      address: formData,
      paymentMethod,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    // 保存到本地存储（实际应该发送到后端）
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.unshift(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    // 清空购物车
    clearCart()

    // 跳转到支付页面或订单页面
    alert(`订单创建成功！订单号：${order.id}\n\n即将跳转到订单页面...`)
    navigate('/orders')
  }

  if (cart.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12">
        结算
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧表单 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 收货地址 */}
            <section className="bg-white border border-neutral-200 p-6 md:p-8">
              <h2 className="text-xl font-light mb-6">收货地址</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    收货人 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="请输入收货人姓名"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    手机号码 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="请输入手机号码"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    省份 <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">请选择省份</option>
                    <option value="上海">上海</option>
                    <option value="北京">北京</option>
                    <option value="广东">广东</option>
                    <option value="浙江">浙江</option>
                    <option value="江苏">江苏</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    城市 <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">请选择城市</option>
                    <option value="市辖区">市辖区</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    区/县 <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">请选择区/县</option>
                    <option value="浦东新区">浦东新区</option>
                    <option value="黄浦区">黄浦区</option>
                    <option value="静安区">静安区</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    邮政编码
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="邮政编码"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 text-neutral-700">
                    详细地址 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="input-field"
                    rows="3"
                    placeholder="请输入详细地址，如街道、门牌号、小区、楼栋号等信息"
                    required
                  ></textarea>
                </div>
              </div>
            </section>

            {/* 支付方式 */}
            <section className="bg-white border border-neutral-200 p-6 md:p-8">
              <h2 className="text-xl font-light mb-6">支付方式</h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 transition-colors cursor-pointer hover:border-neutral-300 ${
                  paymentMethod === 'alipay' ? 'border-primary bg-blue-50' : 'border-neutral-200'
                }">
                  <input
                    type="radio"
                    name="payment"
                    value="alipay"
                    checked={paymentMethod === 'alipay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="#1678FF">
                    <path d="M5.4 21.6h13.2c1.98 0 3.6-1.62 3.6-3.6V6c0-1.98-1.62-3.6-3.6-3.6H5.4C3.42 2.4 1.8 4.02 1.8 6v12c0 1.98 1.62 3.6 3.6 3.6zm14.76-6.72c-1.44.72-3.42 1.5-5.58 1.98.96-1.26 1.68-2.64 2.16-4.02h-3.18v-1.2h4.32v-.84h-4.32V9.6h3.48c-.12-.48-.3-.96-.54-1.44h-6.9V6.96h3.48v-.84H9.24v.84h3.48v1.2h-6.9c.24.48.42.96.54 1.44h3.48v1.2H5.52v.84h4.32v1.2H6.66c.48 1.38 1.2 2.76 2.16 4.02-2.16-.48-4.14-1.26-5.58-1.98-.72 1.32-.96 2.64-.96 3.48 0 .84.84 1.68 2.16 1.68.84 0 1.8-.36 2.76-.96 1.14-.72 2.28-1.8 3.36-3.12 1.08 1.32 2.22 2.4 3.36 3.12.96.6 1.92.96 2.76.96 1.32 0 2.16-.84 2.16-1.68 0-.84-.24-2.16-.96-3.48z"/>
                  </svg>
                  <span className="font-medium">支付宝支付</span>
                </label>

                <label className={`flex items-center p-4 border-2 transition-colors cursor-pointer hover:border-neutral-300 ${
                  paymentMethod === 'wechat' ? 'border-primary bg-green-50' : 'border-neutral-200'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="wechat"
                    checked={paymentMethod === 'wechat'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <Smartphone className="w-6 h-6 mr-3 text-green-600" />
                  <span className="font-medium">微信支付</span>
                </label>

                <label className={`flex items-center p-4 border-2 transition-colors cursor-pointer hover:border-neutral-300 ${
                  paymentMethod === 'card' ? 'border-primary bg-neutral-50' : 'border-neutral-200'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-6 h-6 mr-3" />
                  <span className="font-medium">银行卡支付</span>
                </label>
              </div>
            </section>
          </div>

          {/* 右侧订单摘要 */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 p-6 sticky top-24">
              <h2 className="text-xl font-light mb-6">订单摘要</h2>

              {/* 商品列表 */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.name}
                      className="w-16 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-light mb-1">{item.name}</p>
                      <p className="text-xs text-neutral-600">
                        {item.size} × {item.quantity}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ¥ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-300 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">商品小计</span>
                  <span>¥ {getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">运费</span>
                  <span className="text-green-600">免费</span>
                </div>
                <div className="border-t border-neutral-300 pt-3 flex justify-between font-medium text-lg">
                  <span>应付总额</span>
                  <span className="text-primary">¥ {getCartTotal()}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-6">
                提交订单
              </button>

              <p className="text-xs text-neutral-500 text-center mt-4">
                点击"提交订单"即表示您同意并接受我们的
                <a href="#" className="text-primary hover:underline">服务条款</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Checkout
