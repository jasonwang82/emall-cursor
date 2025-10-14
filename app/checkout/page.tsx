'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Plus, Check } from 'lucide-react'

// Mock cart items
const cartItems = [
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

// Mock addresses
const savedAddresses = [
  {
    id: '1',
    name: '张小姐',
    phone: '138****8888',
    province: '上海市',
    city: '上海市',
    district: '浦东新区',
    detail: '世纪大道88号',
    isDefault: true
  },
  {
    id: '2',
    name: '李先生',
    phone: '139****9999',
    province: '北京市',
    city: '北京市',
    district: '朝阳区',
    detail: '建国路10号',
    isDefault: false
  }
]

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
        结算
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-light tracking-wide flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                收货地址
              </h2>
              <button
                onClick={() => setShowAddressForm(!showAddressForm)}
                className="flex items-center space-x-1 text-sm hover:opacity-70 transition-opacity"
              >
                <Plus className="w-4 h-4" />
                <span>添加新地址</span>
              </button>
            </div>

            {/* New Address Form */}
            {showAddressForm && (
              <div className="mb-6 p-6 bg-gray-50 animate-[slideDown_0.3s_ease-out]">
                <h3 className="font-medium mb-4">新增收货地址</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="收货人"
                    className="px-4 py-2 border border-gray-300 focus:border-black transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="手机号码"
                    className="px-4 py-2 border border-gray-300 focus:border-black transition-colors"
                  />
                  <select className="px-4 py-2 border border-gray-300 focus:border-black transition-colors">
                    <option>选择省份</option>
                    <option>上海市</option>
                    <option>北京市</option>
                    <option>广东省</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 focus:border-black transition-colors">
                    <option>选择城市</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 focus:border-black transition-colors">
                    <option>选择区县</option>
                  </select>
                  <input
                    type="text"
                    placeholder="邮政编码（可选）"
                    className="px-4 py-2 border border-gray-300 focus:border-black transition-colors"
                  />
                </div>
                <textarea
                  placeholder="详细地址"
                  rows={3}
                  className="w-full mt-4 px-4 py-2 border border-gray-300 focus:border-black transition-colors"
                />
                <div className="flex items-center mt-4">
                  <input type="checkbox" id="setDefault" className="mr-2" />
                  <label htmlFor="setDefault" className="text-sm">设为默认地址</label>
                </div>
                <div className="flex justify-end space-x-3 mt-4">
                  <button
                    onClick={() => setShowAddressForm(false)}
                    className="px-6 py-2 text-sm hover:opacity-70 transition-opacity"
                  >
                    取消
                  </button>
                  <button className="btn-primary text-sm px-6 py-2">
                    保存地址
                  </button>
                </div>
              </div>
            )}

            {/* Saved Addresses */}
            <div className="space-y-4">
              {savedAddresses.map((address) => (
                <button
                  key={address.id}
                  onClick={() => setSelectedAddress(address.id)}
                  className={`w-full text-left p-4 border-2 transition-colors ${
                    selectedAddress === address.id
                      ? 'border-black bg-gray-50'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium">{address.name}</span>
                        <span className="text-gray-600">{address.phone}</span>
                        {address.isDefault && (
                          <span className="text-xs bg-black text-white px-2 py-0.5">
                            默认
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {address.province} {address.city} {address.district} {address.detail}
                      </p>
                    </div>
                    {selectedAddress === address.id && (
                      <Check className="w-5 h-5 text-black flex-shrink-0 ml-4" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Order Items */}
          <section>
            <h2 className="text-xl font-light tracking-wide mb-6">
              商品清单
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.color} / {item.size} / x{item.quantity}
                    </p>
                    <p className="font-medium">¥{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notes */}
          <section>
            <h2 className="text-xl font-light tracking-wide mb-4">
              订单备注
            </h2>
            <textarea
              placeholder="如有特殊要求，请在此填写（选填）"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black transition-colors"
            />
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-6">订单摘要</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">商品小计</span>
                <span>¥{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">运费</span>
                <span className="text-green-600">免运费</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-medium mb-6 pt-4 border-t border-gray-300">
              <span>应付总额</span>
              <span className="text-2xl">¥{total}</span>
            </div>

            <Link
              href="/payment"
              className="btn-primary w-full text-center block mb-4"
            >
              提交订单
            </Link>

            <p className="text-xs text-gray-500 text-center">
              点击提交订单即表示您同意我们的
              <Link href="/terms" className="underline">服务条款</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
