import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Truck, RefreshCw, Shield, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Mock product data
  const product = {
    id: parseInt(id),
    name: '针织连衣裙',
    price: 299,
    originalPrice: 499,
    description: '精选优质面料，柔软舒适，透气性好。简约设计，适合多种场合穿着。',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: '黑色', value: 'black' },
      { name: '米色', value: 'beige' }
    ],
    details: {
      material: '70% 羊毛, 30% 涤纶',
      care: '手洗，不可漂白，低温熨烫',
      fit: '修身版型',
      madeIn: '中国'
    },
    sizeGuide: [
      { size: 'S', bust: '82-86', waist: '62-66', hip: '86-90', length: '85' },
      { size: 'M', bust: '86-90', waist: '66-70', hip: '90-94', length: '86' },
      { size: 'L', bust: '90-94', waist: '70-74', hip: '94-98', length: '87' },
      { size: 'XL', bust: '94-98', waist: '74-78', hip: '98-102', length: '88' }
    ],
    reviews: [
      {
        id: 1,
        user: '小**',
        rating: 5,
        date: '2025-10-10',
        content: '质量很好，面料舒适，版型也很好看。非常满意！',
        images: []
      },
      {
        id: 2,
        user: '李**',
        rating: 4,
        date: '2025-10-08',
        content: '整体不错，就是颜色比图片稍深一点，不过也很好看。',
        images: []
      },
      {
        id: 3,
        user: '王**',
        rating: 5,
        date: '2025-10-05',
        content: '第二次购买了，质量稳定，值得推荐！',
        images: []
      }
    ]
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    addToCart(product, selectedSize, quantity)
    alert('已加入购物车')
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    addToCart(product, selectedSize, quantity)
    navigate('/cart')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8 text-primary-gray">
        <Link to="/" className="hover:text-primary-black">首页</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary-black">商品</Link>
        <span className="mx-2">/</span>
        <span className="text-primary-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="mb-4 aspect-[3/4] overflow-hidden">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`aspect-square overflow-hidden border-2 transition-colors ${
                  currentImage === index ? 'border-primary-black' : 'border-transparent'
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

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-light tracking-wide mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-primary-gray">4.8 (128 评价)</span>
            </div>
          </div>

          <div className="flex items-baseline space-x-4 mb-8">
            <span className="text-3xl font-light">¥ {product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-primary-gray line-through">¥ {product.originalPrice}</span>
                <span className="text-red-600 text-sm">特惠</span>
              </>
            )}
          </div>

          <p className="text-primary-gray mb-8">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">选择尺码</span>
              <button className="text-sm text-primary-gray hover:text-primary-black underline">
                尺码指南
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-3 text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'border-primary-black bg-primary-black text-white'
                      : 'border-primary-lightgray hover:border-primary-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <span className="text-sm font-medium mb-4 block">数量</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-primary-lightgray hover:border-primary-black"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-primary-lightgray hover:border-primary-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-8">
            <button onClick={handleBuyNow} className="btn-primary w-full">
              立即购买
            </button>
            <button onClick={handleAddToCart} className="btn-secondary w-full">
              加入购物车
            </button>
            <button className="w-full py-3 border border-primary-lightgray hover:border-primary-black flex items-center justify-center space-x-2">
              <Heart size={20} />
              <span className="text-sm font-medium tracking-wide uppercase">收藏</span>
            </button>
          </div>

          {/* Product Features */}
          <div className="border-t border-primary-lightgray pt-8 space-y-4">
            <div className="flex items-start space-x-3">
              <Truck size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">免费配送</p>
                <p className="text-xs text-primary-gray">全国包邮，5-7个工作日送达</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RefreshCw size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">7天无理由退换</p>
                <p className="text-xs text-primary-gray">支持7天内无理由退换货</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">正品保证</p>
                <p className="text-xs text-primary-gray">所有商品均为正品</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-t border-primary-lightgray">
        <div className="flex space-x-8 border-b border-primary-lightgray">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-4 text-sm font-medium tracking-wide uppercase transition-colors relative ${
              activeTab === 'description' ? 'text-primary-black' : 'text-primary-gray'
            }`}
          >
            商品详情
            {activeTab === 'description' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-black" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('size')}
            className={`py-4 text-sm font-medium tracking-wide uppercase transition-colors relative ${
              activeTab === 'size' ? 'text-primary-black' : 'text-primary-gray'
            }`}
          >
            尺码信息
            {activeTab === 'size' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-black" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 text-sm font-medium tracking-wide uppercase transition-colors relative ${
              activeTab === 'reviews' ? 'text-primary-black' : 'text-primary-gray'
            }`}
          >
            用户评价 ({product.reviews.length})
            {activeTab === 'reviews' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-black" />
            )}
          </button>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">产品详情</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="w-24 text-primary-gray">材质：</dt>
                  <dd>{product.details.material}</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-primary-gray">护理说明：</dt>
                  <dd>{product.details.care}</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-primary-gray">版型：</dt>
                  <dd>{product.details.fit}</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-primary-gray">产地：</dt>
                  <dd>{product.details.madeIn}</dd>
                </div>
              </dl>
            </div>
          )}

          {activeTab === 'size' && (
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">尺码对照表（单位：cm）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary-beige">
                    <tr>
                      <th className="px-4 py-3 text-left">尺码</th>
                      <th className="px-4 py-3 text-left">胸围</th>
                      <th className="px-4 py-3 text-left">腰围</th>
                      <th className="px-4 py-3 text-left">臀围</th>
                      <th className="px-4 py-3 text-left">衣长</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizeGuide.map((size, index) => (
                      <tr key={size.size} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium">{size.size}</td>
                        <td className="px-4 py-3">{size.bust}</td>
                        <td className="px-4 py-3">{size.waist}</td>
                        <td className="px-4 py-3">{size.hip}</td>
                        <td className="px-4 py-3">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-primary-gray mt-4">
                * 以上数据为人工测量，可能存在1-3cm误差，请以实物为准
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-3xl space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-primary-lightgray pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-primary-gray">{review.date}</span>
                  </div>
                  <p className="text-sm text-primary-gray">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
