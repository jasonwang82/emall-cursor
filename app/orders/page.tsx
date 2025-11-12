'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react'

// Mock orders data
const mockOrders = [
  {
    id: 'ORD20241014001',
    date: '2024-10-14',
    status: 'delivered',
    total: 797,
    items: [
      {
        id: '1',
        name: '纯色圆领T恤',
        price: 199,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
      },
      {
        id: '2',
        name: '高腰阔腿裤',
        price: 399,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80'
      }
    ]
  },
  {
    id: 'ORD20241010001',
    date: '2024-10-10',
    status: 'shipping',
    total: 699,
    items: [
      {
        id: '5',
        name: '风衣外套',
        price: 699,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80'
      }
    ]
  },
  {
    id: 'ORD20241008001',
    date: '2024-10-08',
    status: 'processing',
    total: 599,
    items: [
      {
        id: '7',
        name: '西装外套',
        price: 599,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&q=80'
      }
    ]
  }
]

const statusConfig = {
  processing: {
    label: '处理中',
    icon: Clock,
    color: 'text-yellow-600'
  },
  shipping: {
    label: '配送中',
    icon: Package,
    color: 'text-blue-600'
  },
  delivered: {
    label: '已送达',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  cancelled: {
    label: '已取消',
    icon: XCircle,
    color: 'text-red-600'
  }
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'processing' | 'shipping' | 'delivered'>('all')
  
  const filteredOrders = activeTab === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === activeTab)

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
        我的订单
      </h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-6 py-3 whitespace-nowrap transition-colors ${
            activeTab === 'all'
              ? 'border-b-2 border-black font-medium'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          全部订单
        </button>
        <button
          onClick={() => setActiveTab('processing')}
          className={`px-6 py-3 whitespace-nowrap transition-colors ${
            activeTab === 'processing'
              ? 'border-b-2 border-black font-medium'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          处理中
        </button>
        <button
          onClick={() => setActiveTab('shipping')}
          className={`px-6 py-3 whitespace-nowrap transition-colors ${
            activeTab === 'shipping'
              ? 'border-b-2 border-black font-medium'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          配送中
        </button>
        <button
          onClick={() => setActiveTab('delivered')}
          className={`px-6 py-3 whitespace-nowrap transition-colors ${
            activeTab === 'delivered'
              ? 'border-b-2 border-black font-medium'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          已送达
        </button>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-20">
          <Package className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-2xl font-light tracking-wide mb-4">暂无订单</h2>
          <Link href="/products" className="btn-primary inline-block">
            开始购物
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => {
            const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
            const statusColor = statusConfig[order.status as keyof typeof statusConfig].color
            const statusLabel = statusConfig[order.status as keyof typeof statusConfig].label

            return (
              <div key={order.id} className="border border-gray-200 overflow-hidden">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="font-medium">订单号：{order.id}</span>
                    <span className="text-gray-600">{order.date}</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${statusColor}`}>
                    <StatusIcon className="w-5 h-5" />
                    <span className="font-medium">{statusLabel}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <Link
                          href={`/products/${item.id}`}
                          className="relative w-20 h-24 bg-gray-100 flex-shrink-0"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </Link>
                        <div className="flex-1">
                          <Link
                            href={`/products/${item.id}`}
                            className="font-light hover:opacity-70 transition-opacity"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            x{item.quantity}
                          </p>
                          <p className="font-medium mt-2">¥{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      共 {order.items.reduce((sum, item) => sum + item.quantity, 0)} 件商品
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600 mr-2">订单金额：</span>
                      <span className="text-xl font-medium">¥{order.total}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-3 mt-4">
                    <Link
                      href={`/orders/${order.id}`}
                      className="btn-secondary text-sm px-6 py-2"
                    >
                      查看详情
                    </Link>
                    {order.status === 'delivered' && (
                      <button className="btn-primary text-sm px-6 py-2">
                        再次购买
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
