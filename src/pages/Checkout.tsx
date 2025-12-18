import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Plus } from 'lucide-react'

// 模拟地址数据
const savedAddresses = [
  {
    id: 1,
    name: '张三',
    phone: '138****8888',
    province: '上海市',
    city: '上海市',
    district: '静安区',
    detail: '南京西路1000号',
    isDefault: true,
  },
  {
    id: 2,
    name: '李四',
    phone: '139****9999',
    province: '北京市',
    city: '北京市',
    district: '朝阳区',
    detail: '建国路100号',
    isDefault: false,
  },
]

// 模拟订单商品
const orderItems = [
  {
    id: 1,
    name: '羊绒混纺大衣',
    price: 899,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=100&h=125&fit=crop',
    size: 'M',
    color: '黑色',
    quantity: 1,
  },
  {
    id: 2,
    name: '真丝衬衫',
    price: 459,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=100&h=125&fit=crop',
    size: 'S',
    color: '白色',
    quantity: 2,
  },
]

export default function Checkout() {
  const navigate = useNavigate()
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal >= 99 ? 0 : 15
  const total = subtotal + shipping

  const handleSubmitOrder = () => {
    navigate('/payment')
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-8">
        确认订单
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：地址和商品信息 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 收货地址 */}
          <div className="border border-primary-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium tracking-wide flex items-center">
                <MapPin size={20} className="mr-2" />
                收货地址
              </h2>
              <button
                onClick={() => setShowAddressForm(true)}
                className="text-sm text-primary-600 hover:text-primary-900 transition-colors flex items-center"
              >
                <Plus size={16} className="mr-1" />
                添加新地址
              </button>
            </div>

            <div className="space-y-3">
              {savedAddresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => setSelectedAddress(address.id)}
                  className={`p-4 border-2 cursor-pointer transition-colors ${
                    selectedAddress === address.id
                      ? 'border-primary-900 bg-primary-50'
                      : 'border-primary-200 hover:border-primary-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="font-medium mr-4">{address.name}</span>
                      <span className="text-primary-600">{address.phone}</span>
                    </div>
                    {address.isDefault && (
                      <span className="text-xs bg-primary-900 text-white px-2 py-1">
                        默认
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary-600">
                    {address.province} {address.city} {address.district} {address.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 商品清单 */}
          <div className="border border-primary-200 p-6">
            <h2 className="text-lg font-medium tracking-wide mb-4">商品清单</h2>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-primary-600 mb-2">
                      {item.color} / {item.size} / 数量: {item.quantity}
                    </p>
                    <p className="font-medium">¥{item.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">¥{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 备注 */}
          <div className="border border-primary-200 p-6">
            <h2 className="text-lg font-medium tracking-wide mb-4">订单备注</h2>
            <textarea
              className="w-full px-4 py-3 border border-primary-300 rounded-none focus:outline-none focus:border-primary-900 resize-none"
              rows={4}
              placeholder="如有特殊要求，请在此填写（选填）"
            ></textarea>
          </div>
        </div>

        {/* 右侧：订单摘要 */}
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
            </div>

            <div className="border-t border-primary-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-medium mb-4">
                <span>应付总额</span>
                <span className="text-xl text-primary-900">¥{total}</span>
              </div>
            </div>

            <button onClick={handleSubmitOrder} className="w-full btn-primary mb-4">
              提交订单
            </button>

            <div className="text-xs text-center text-primary-600 space-y-1">
              <p>点击"提交订单"即表示您同意</p>
              <p>
                <button className="hover:text-primary-900">购买条款</button>
                {' '}和{' '}
                <button className="hover:text-primary-900">退款政策</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 添加地址表单弹窗 */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full p-6">
            <h3 className="text-xl font-light tracking-wider mb-6">添加收货地址</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">收货人</label>
                <input type="text" className="input-field" placeholder="请输入姓名" />
              </div>
              <div>
                <label className="block text-sm mb-2">手机号码</label>
                <input type="tel" className="input-field" placeholder="请输入手机号" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm mb-2">省份</label>
                  <select className="input-field">
                    <option>请选择</option>
                    <option>上海市</option>
                    <option>北京市</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">城市</label>
                  <select className="input-field">
                    <option>请选择</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">区县</label>
                  <select className="input-field">
                    <option>请选择</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">详细地址</label>
                <textarea className="input-field" rows={3} placeholder="街道、门牌号等"></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="setDefault" className="mr-2" />
                <label htmlFor="setDefault" className="text-sm">设为默认地址</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowAddressForm(false)} className="flex-1 btn-secondary">
                  取消
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
