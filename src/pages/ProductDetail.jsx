import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Heart, Share2, Truck, RotateCcw, Shield, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('details')

  // 模拟商品数据
  const product = {
    id: parseInt(id),
    name: '羊绒混纺大衣',
    price: 1299,
    originalPrice: 1599,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['黑色', '米色', '灰色'],
    description: '精选优质羊绒混纺面料，触感柔软细腻，保暖性极佳。经典大衣版型，简约而不失格调，适合多种场合穿着。',
    details: [
      '成分：70% 羊毛，30% 羊绒',
      '产地：中国',
      '厚度：适中',
      '弹性：无弹',
      '版型：宽松',
      '适合季节：秋冬'
    ],
    sizeGuide: {
      XS: { bust: '84', waist: '66', hip: '88', length: '98' },
      S: { bust: '88', waist: '70', hip: '92', length: '100' },
      M: { bust: '92', waist: '74', hip: '96', length: '102' },
      L: { bust: '96', waist: '78', hip: '100', length: '104' },
      XL: { bust: '100', waist: '82', hip: '104', length: '106' }
    },
    reviews: [
      {
        id: 1,
        user: '张女士',
        rating: 5,
        date: '2024-03-15',
        content: '质量非常好，面料柔软舒适，版型也很好看，非常满意！',
        size: 'M',
        images: []
      },
      {
        id: 2,
        user: '李女士',
        rating: 5,
        date: '2024-03-10',
        content: '颜色很正，做工精致，穿起来显瘦，强烈推荐！',
        size: 'S',
        images: []
      },
      {
        id: 3,
        user: '王女士',
        rating: 4,
        date: '2024-03-05',
        content: '整体不错，就是感觉稍微有点长，不过可以接受。',
        size: 'M',
        images: []
      }
    ],
    stock: 50,
    rating: 4.8,
    reviewCount: 128
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    addToCart(product, selectedSize)
    alert('已添加到购物车')
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    addToCart(product, selectedSize)
    navigate('/cart')
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* 图片区域 */}
        <div>
          {/* 主图 */}
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          
          {/* 缩略图 */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 商品信息 */}
        <div>
          <h1 className="text-2xl md:text-3xl font-light mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                />
              ))}
              <span className="ml-2 text-sm text-neutral-600">
                {product.rating} ({product.reviewCount} 评价)
              </span>
            </div>
          </div>

          <div className="flex items-baseline mb-8">
            <span className="text-3xl font-medium mr-3">¥ {product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-neutral-400 line-through">
                ¥ {product.originalPrice}
              </span>
            )}
          </div>

          <p className="text-neutral-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* 尺码选择 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">选择尺码</label>
              <button className="text-sm text-neutral-600 hover:text-primary underline">
                尺码指南
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border-2 transition-colors ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-white'
                      : 'border-neutral-300 hover:border-neutral-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 数量选择 */}
          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">数量</label>
            <div className="flex items-center border border-neutral-300 w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 hover:bg-neutral-100 transition-colors"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="flex-1 text-center h-10 border-x border-neutral-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 hover:bg-neutral-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3 mb-8">
            <button onClick={handleAddToCart} className="btn-secondary flex-1">
              加入购物车
            </button>
            <button onClick={handleBuyNow} className="btn-primary flex-1">
              立即购买
            </button>
            <button className="border border-neutral-300 p-3 hover:bg-neutral-100 transition-colors">
              <Heart size={20} />
            </button>
            <button className="border border-neutral-300 p-3 hover:bg-neutral-100 transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          {/* 服务说明 */}
          <div className="border-t border-neutral-200 pt-6 space-y-3">
            <div className="flex items-start">
              <Truck size={20} className="mr-3 mt-0.5 flex-shrink-0 text-neutral-600" />
              <div>
                <p className="font-medium text-sm">全场包邮</p>
                <p className="text-xs text-neutral-600">48小时内发货</p>
              </div>
            </div>
            <div className="flex items-start">
              <RotateCcw size={20} className="mr-3 mt-0.5 flex-shrink-0 text-neutral-600" />
              <div>
                <p className="font-medium text-sm">7天无理由退换</p>
                <p className="text-xs text-neutral-600">质量问题免费退换</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield size={20} className="mr-3 mt-0.5 flex-shrink-0 text-neutral-600" />
              <div>
                <p className="font-medium text-sm">正品保证</p>
                <p className="text-xs text-neutral-600">100%正品，假一赔十</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 详情和评价标签页 */}
      <div className="border-t border-neutral-200">
        <div className="flex border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === 'details'
                ? 'border-b-2 border-primary text-primary'
                : 'text-neutral-600 hover:text-primary'
            }`}
          >
            商品详情
          </button>
          <button
            onClick={() => setActiveTab('size')}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === 'size'
                ? 'border-b-2 border-primary text-primary'
                : 'text-neutral-600 hover:text-primary'
            }`}
          >
            尺码信息
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === 'reviews'
                ? 'border-b-2 border-primary text-primary'
                : 'text-neutral-600 hover:text-primary'
            }`}
          >
            用户评价 ({product.reviewCount})
          </button>
        </div>

        <div className="py-8">
          {activeTab === 'details' && (
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">产品信息</h3>
              <ul className="space-y-2 text-neutral-600">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'size' && (
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">尺码对照表</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="border border-neutral-200 px-4 py-3 text-left text-sm font-medium">尺码</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left text-sm font-medium">胸围(cm)</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left text-sm font-medium">腰围(cm)</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left text-sm font-medium">臀围(cm)</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left text-sm font-medium">衣长(cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.sizeGuide).map(([size, measurements]) => (
                      <tr key={size} className="hover:bg-neutral-50">
                        <td className="border border-neutral-200 px-4 py-3 font-medium">{size}</td>
                        <td className="border border-neutral-200 px-4 py-3">{measurements.bust}</td>
                        <td className="border border-neutral-200 px-4 py-3">{measurements.waist}</td>
                        <td className="border border-neutral-200 px-4 py-3">{measurements.hip}</td>
                        <td className="border border-neutral-200 px-4 py-3">{measurements.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                * 以上数据为平铺测量，因测量方式不同，可能存在1-3cm误差，属正常现象。
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-3xl">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-light mr-4">{product.rating}</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600">基于 {product.reviewCount} 条评价</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {product.reviews.map(review => (
                  <div key={review.id} className="border-b border-neutral-200 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-medium mb-1">{review.user}</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                            />
                          ))}
                          <span className="ml-2 text-xs text-neutral-500">购买尺码: {review.size}</span>
                        </div>
                      </div>
                      <span className="text-sm text-neutral-500">{review.date}</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{review.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="btn-secondary">
                  加载更多评价
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
