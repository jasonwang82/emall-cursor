import { Package, Truck, CheckCircle, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const orders = [
  {
    id: '2025101301',
    date: '2025-10-13',
    status: 'delivered',
    total: 598,
    items: [
      {
        id: 1,
        name: '简约V领连衣裙',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
        price: 299,
        quantity: 2,
        size: 'M',
        color: '黑色'
      }
    ]
  },
  {
    id: '2025101202',
    date: '2025-10-12',
    status: 'shipping',
    total: 329,
    items: [
      {
        id: 4,
        name: '优雅针织开衫',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
        price: 329,
        quantity: 1,
        size: 'S',
        color: '米色'
      }
    ]
  },
  {
    id: '2025101103',
    date: '2025-10-11',
    status: 'processing',
    total: 478,
    items: [
      {
        id: 2,
        name: '经典白衬衫',
        image: 'https://images.unsplash.com/photo-1624206112918-1b5b3e3c3b25?w=400&h=600&fit=crop',
        price: 199,
        quantity: 1,
        size: 'M',
        color: '白色'
      },
      {
        id: 3,
        name: '高腰阔腿裤',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
        price: 259,
        quantity: 1,
        size: 'L',
        color: '黑色'
      }
    ]
  }
]

const statusConfig = {
  processing: {
    label: '处理中',
    icon: Clock,
    color: 'text-blue-600'
  },
  shipping: {
    label: '配送中',
    icon: Truck,
    color: 'text-orange-600'
  },
  delivered: {
    label: '已送达',
    icon: CheckCircle,
    color: 'text-green-600'
  }
}

export default function OrdersPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-light mb-8">我的订单</h1>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-light mb-2">暂无订单</h2>
          <p className="text-gray-600 mb-8">快去选购心仪的商品吧</p>
          <Link to="/products" className="btn-primary inline-block">
            去购物
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
            return (
              <div key={order.id} className="border border-gray-200">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-sm text-gray-600">订单号: </span>
                      <span className="font-medium">{order.id}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">下单时间: </span>
                      <span>{order.date}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${statusConfig[order.status as keyof typeof statusConfig].color}`}>
                    <StatusIcon size={18} />
                    <span className="font-medium">
                      {statusConfig[order.status as keyof typeof statusConfig].label}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-28 object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.color} / {item.size}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">x {item.quantity}</span>
                            <span className="font-medium">¥ {item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-gray-600 mr-2">订单总额:</span>
                      <span className="text-xl font-medium">¥ {order.total.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-3">
                      {order.status === 'delivered' && (
                        <button className="btn-secondary">
                          再次购买
                        </button>
                      )}
                      {order.status === 'shipping' && (
                        <button className="btn-secondary">
                          查看物流
                        </button>
                      )}
                      <button className="px-6 py-3 border border-gray-300 hover:border-black transition-smooth">
                        订单详情
                      </button>
                    </div>
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
