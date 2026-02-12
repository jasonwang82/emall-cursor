import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Package, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Orders = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrders(savedOrders)
  }, [isAuthenticated, navigate])

  const getStatusText = (status) => {
    const statusMap = {
      pending: { text: '待支付', color: 'text-yellow-600' },
      paid: { text: '已支付', color: 'text-blue-600' },
      shipped: { text: '已发货', color: 'text-green-600' },
      delivered: { text: '已送达', color: 'text-green-700' },
      cancelled: { text: '已取消', color: 'text-red-600' }
    }
    return statusMap[status] || statusMap.pending
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16">
          <Package size={64} className="mx-auto text-primary-gray mb-4" />
          <h2 className="text-2xl font-light tracking-wide mb-4">暂无订单</h2>
          <p className="text-primary-gray mb-8">您还没有任何订单记录</p>
          <Link to="/products" className="btn-primary inline-block">
            去购物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-light tracking-wide mb-8">我的订单</h1>

      <div className="space-y-6">
        {orders.map((order) => {
          const status = getStatusText(order.status)
          return (
            <div key={order.id} className="border border-primary-lightgray">
              {/* Order Header */}
              <div className="bg-primary-beige px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div>
                    <span className="text-primary-gray">订单号：</span>
                    <span className="font-medium">{order.id}</span>
                  </div>
                  <div>
                    <span className="text-primary-gray">下单时间：</span>
                    <span>{formatDate(order.date)}</span>
                  </div>
                </div>
                <div className={`text-sm font-medium ${status.color}`}>
                  {status.text}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-4 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <img
                        src={item.image || item.images?.[0]}
                        alt={item.name}
                        className="w-20 h-24 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="text-sm text-primary-gray mb-2">
                          尺码: {item.size} × {item.quantity}
                        </p>
                        <p className="text-sm font-medium">¥ {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-primary-lightgray gap-4">
                  <div className="text-sm">
                    <span className="text-primary-gray">配送地址：</span>
                    <span>
                      {order.shippingInfo.province} {order.shippingInfo.city} {order.shippingInfo.district} {order.shippingInfo.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-primary-gray mb-1">订单总额</p>
                      <p className="text-xl font-medium">¥ {order.total.toFixed(2)}</p>
                    </div>
                    <button className="btn-secondary">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders
