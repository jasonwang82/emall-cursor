import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, User } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { cart, user } = useStore()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    province: '',
    city: '',
    district: '',
    address: '',
    notes: ''
  })

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 299 ? 0 : 20
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save address and proceed to payment
    navigate('/payment')
  }

  if (cart.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-light mb-8">确认订单</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Saved Addresses */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-xl font-medium mb-4">收货地址</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">收货人</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field pl-10"
                        placeholder="姓名"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">手机号码</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field pl-10"
                        placeholder="11位手机号"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">省份</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="input-field"
                      required
                    >
                      <option value="">选择省份</option>
                      <option value="北京">北京</option>
                      <option value="上海">上海</option>
                      <option value="广东">广东</option>
                      <option value="浙江">浙江</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">城市</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="input-field"
                      required
                    >
                      <option value="">选择城市</option>
                      <option value="市辖区">市辖区</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">区县</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="input-field"
                      required
                    >
                      <option value="">选择区县</option>
                      <option value="朝阳区">朝阳区</option>
                      <option value="海淀区">海淀区</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">详细地址</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="input-field pl-10 min-h-[80px]"
                      placeholder="街道、楼牌号等"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">订单备注（可选）</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="input-field min-h-[60px]"
                    placeholder="对订单的补充说明"
                  />
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-xl font-medium mb-4">订单商品</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-28 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.selectedColor && <span>{item.selectedColor} </span>}
                        {item.selectedSize && <span>/ {item.selectedSize}</span>}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">x {item.quantity}</span>
                        <span className="font-medium">¥ {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-6">订单总计</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>商品金额</span>
                  <span>¥ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>运费</span>
                  <span>{shipping === 0 ? '免费' : `¥ ${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>应付金额</span>
                  <span className="text-2xl">¥ {total.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary">
                去支付
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
