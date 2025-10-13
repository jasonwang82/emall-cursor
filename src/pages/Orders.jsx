import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Package, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Orders = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    // 从本地存储获取订单
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrders(savedOrders)
  }, [user, navigate])

  const getStatusText = (status) => {
    const statusMap = {
      pending: '待支付',
      paid: '已支付',
      shipped: '已发货',
      delivered: '已送达',
      cancelled: '已取消',
    }
    return statusMap[status] || status
  }

  const getStatusColor = (status) => {
    const colorMap = {
      pending: 'text-yellow-600',
      paid: 'text-blue-600',
      shipped: 'text-purple-600',
      delivered: 'text-green-600',
      cancelled: 'text-neutral-500',
    }
    return colorMap[status] || 'text-neutral-600'
  }

  const filteredOrders = orders.filter((order) => {
    if (filter === 'all') return true
    return order.status === filter
  })

  if (!user) {
    return null
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12">
        我的订单
      </h1>

      {/* 订单筛选 */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-200">
        {[
          { key: 'all', label: '全部订单' },
          { key: 'pending', label: '待支付' },
          { key: 'paid', label: '已支付' },
          { key: 'shipped', label: '已发货' },
          { key: 'delivered', label: '已送达' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-6 py-3 font-medium transition-colors ${
              filter === tab.key
                ? 'border-b-2 border-primary text-primary'
                : 'text-neutral-600 hover:text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 订单列表 */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-16">
          <Package size={64} className="mx-auto text-neutral-300 mb-6" />
          <h2 className="text-xl font-light mb-4">暂无订单</h2>
          <p className="text-neutral-600 mb-8">
            {filter === 'all' ? '您还没有任何订单' : `暂无${getStatusText(filter)}订单`}
          </p>
          <Link to="/products" className="btn-primary inline-block">
            去购物
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-neutral-200 overflow-hidden"
            >
              {/* 订单头部 */}
              <div className="bg-neutral-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-sm">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-neutral-600">订单号：</span>
                    <span className="font-medium">{order.id}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">下单时间：</span>
                    <span>{new Date(order.createdAt).toLocaleString('zh-CN')}</span>
                  </div>
                </div>
                <div className={`font-medium ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </div>
              </div>

              {/* 订单商品 */}
              <div className="p-6">
                <div className="space-y-4 mb-4">
                  {order.items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4"
                    >
                      <img
                        src={item.image || item.images?.[0]}
                        alt={item.name}
                        className="w-20 h-24 md:w-24 md:h-32 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-light text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-neutral-600 mb-2">
                          尺码: {item.size} | 数量: {item.quantity}
                        </p>
                        <p className="font-medium">¥ {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-neutral-200">
                  <div className="text-sm text-neutral-600">
                    <p className="mb-1">
                      收货人：{order.address.name} {order.address.phone}
                    </p>
                    <p>
                      收货地址：{order.address.province} {order.address.city}{' '}
                      {order.address.district} {order.address.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-neutral-600 mb-1">订单总额</p>
                      <p className="text-2xl font-medium text-primary">
                        ¥ {order.total}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {order.status === 'pending' && (
                        <button className="btn-primary text-sm px-4 py-2">
                          立即支付
                        </button>
                      )}
                      {order.status === 'delivered' && (
                        <button className="btn-secondary text-sm px-4 py-2">
                          评价订单
                        </button>
                      )}
                      <button className="text-sm text-neutral-600 hover:text-primary px-4 py-2 border border-neutral-300 hover:border-primary transition-colors">
                        查看详情
                        <ChevronRight size={16} className="inline ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
