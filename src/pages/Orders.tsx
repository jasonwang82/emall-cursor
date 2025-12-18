import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Package, Truck, CheckCircle, X } from 'lucide-react'

// 模拟订单数据
const ordersList = [
  {
    id: 'OD20251013001',
    date: '2025-10-13 14:30',
    status: 'delivered',
    statusText: '已完成',
    total: 1817,
    items: [
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
    ],
  },
  {
    id: 'OD20251010002',
    date: '2025-10-10 10:15',
    status: 'shipping',
    statusText: '配送中',
    total: 799,
    items: [
      {
        id: 5,
        name: '经典风衣',
        price: 799,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=125&fit=crop',
        size: 'L',
        color: '卡其色',
        quantity: 1,
      },
    ],
  },
  {
    id: 'OD20251008003',
    date: '2025-10-08 16:45',
    status: 'processing',
    statusText: '处理中',
    total: 328,
    items: [
      {
        id: 3,
        name: '高腰阔腿裤',
        price: 329,
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=100&h=125&fit=crop',
        size: 'M',
        color: '黑色',
        quantity: 1,
      },
    ],
  },
]

export default function Orders() {
  const [activeTab, setActiveTab] = useState('all')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={20} className="text-green-500" />
      case 'shipping':
        return <Truck size={20} className="text-blue-500" />
      case 'processing':
        return <Package size={20} className="text-yellow-500" />
      case 'cancelled':
        return <X size={20} className="text-red-500" />
      default:
        return <Package size={20} className="text-primary-400" />
    }
  }

  const filteredOrders = activeTab === 'all' 
    ? ordersList 
    : ordersList.filter(order => order.status === activeTab)

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-8">
        我的订单
      </h1>

      {/* 订单状态标签 */}
      <div className="flex overflow-x-auto mb-8 border-b border-primary-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-6 py-3 text-sm tracking-wide whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'all'
              ? 'border-primary-900 text-primary-900 font-medium'
              : 'border-transparent text-primary-600 hover:text-primary-900'
          }`}
        >
          全部订单
        </button>
        <button
          onClick={() => setActiveTab('processing')}
          className={`px-6 py-3 text-sm tracking-wide whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'processing'
              ? 'border-primary-900 text-primary-900 font-medium'
              : 'border-transparent text-primary-600 hover:text-primary-900'
          }`}
        >
          处理中
        </button>
        <button
          onClick={() => setActiveTab('shipping')}
          className={`px-6 py-3 text-sm tracking-wide whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'shipping'
              ? 'border-primary-900 text-primary-900 font-medium'
              : 'border-transparent text-primary-600 hover:text-primary-900'
          }`}
        >
          配送中
        </button>
        <button
          onClick={() => setActiveTab('delivered')}
          className={`px-6 py-3 text-sm tracking-wide whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'delivered'
              ? 'border-primary-900 text-primary-900 font-medium'
              : 'border-transparent text-primary-600 hover:text-primary-900'
          }`}
        >
          已完成
        </button>
      </div>

      {/* 订单列表 */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-20">
          <Package size={64} className="mx-auto mb-6 text-primary-300" />
          <p className="text-primary-600 mb-4">暂无订单</p>
          <Link to="/products" className="btn-primary inline-block">
            去购物
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="border border-primary-200 p-6">
              {/* 订单头部 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-primary-200">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-4">订单号: {order.id}</span>
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 text-sm">{order.statusText}</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary-600">下单时间: {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary-600 mb-1">订单总额</p>
                  <p className="text-xl font-medium">¥{order.total}</p>
                </div>
              </div>

              {/* 订单商品 */}
              <div className="space-y-4 mb-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link
                        to={`/products/${item.id}`}
                        className="font-medium hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-primary-600 mt-1">
                        {item.color} / {item.size} / 数量: {item.quantity}
                      </p>
                      <p className="text-sm font-medium mt-2">¥{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 订单操作 */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary-200">
                {order.status === 'delivered' && (
                  <>
                    <button className="btn-secondary text-sm py-2">
                      再次购买
                    </button>
                    <button className="btn-secondary text-sm py-2">
                      评价
                    </button>
                  </>
                )}
                {order.status === 'shipping' && (
                  <button className="btn-primary text-sm py-2">
                    查看物流
                  </button>
                )}
                {order.status === 'processing' && (
                  <button className="btn-secondary text-sm py-2">
                    取消订单
                  </button>
                )}
                <Link
                  to={`/contact?order=${order.id}`}
                  className="btn-secondary text-sm py-2 text-center"
                >
                  联系客服
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
