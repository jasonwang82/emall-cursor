import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, Star, Truck, RotateCcw, Shield } from 'lucide-react'

// 模拟商品详情数据
const productData = {
  id: 1,
  name: '羊绒混纺大衣',
  price: 899,
  originalPrice: 1299,
  images: [
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop',
  ],
  description: '经典羊绒混纺大衣，采用优质羊绒与羊毛混纺面料，触感柔软舒适，保暖性能优异。简约的设计，流畅的剪裁，展现优雅气质。适合多种场合穿着，是秋冬季节的必备单品。',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['黑色', '米色', '深灰'],
  details: [
    '面料成分：60% 羊毛，40% 羊绒',
    '里料：100% 聚酯纤维',
    '版型：宽松',
    '厚度：适中',
    '弹性：无弹',
    '洗涤说明：建议干洗',
  ],
  reviews: [
    {
      id: 1,
      user: '张**',
      rating: 5,
      date: '2025-10-10',
      content: '质量非常好，面料舒适，穿着很暖和，颜色也很正，非常满意！',
      size: 'M',
    },
    {
      id: 2,
      user: '李**',
      rating: 5,
      date: '2025-10-08',
      content: '大衣版型很好看，做工精细，性价比很高，推荐购买！',
      size: 'L',
    },
    {
      id: 3,
      user: '王**',
      rating: 4,
      date: '2025-10-05',
      content: '整体不错，就是颜色比图片稍微深一点，但是不影响，很喜欢。',
      size: 'S',
    },
  ],
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    if (!selectedColor) {
      alert('请选择颜色')
      return
    }
    alert('已添加到购物车')
    navigate('/cart')
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    if (!selectedColor) {
      alert('请选择颜色')
      return
    }
    navigate('/checkout')
  }

  return (
    <div className="container-custom py-8 md:py-12">
      {/* 商品主要信息 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* 左侧：图片展示 */}
        <div>
          {/* 主图 */}
          <div className="mb-4 overflow-hidden">
            <img
              src={productData.images[selectedImage]}
              alt={productData.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          {/* 缩略图 */}
          <div className="grid grid-cols-4 gap-2">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 overflow-hidden ${
                  selectedImage === index ? 'border-primary-900' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${productData.name} ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧：商品信息 */}
        <div>
          <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-4">
            {productData.name}
          </h1>
          
          {/* 价格 */}
          <div className="flex items-baseline mb-6">
            <span className="text-3xl font-medium text-primary-900">
              ¥{productData.price}
            </span>
            <span className="ml-3 text-lg text-primary-400 line-through">
              ¥{productData.originalPrice}
            </span>
          </div>

          {/* 商品描述 */}
          <p className="text-primary-600 leading-relaxed mb-6">
            {productData.description}
          </p>

          {/* 颜色选择 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 tracking-wide">颜色</h3>
            <div className="flex gap-2">
              {productData.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-6 py-2 border transition-colors ${
                    selectedColor === color
                      ? 'border-primary-900 bg-primary-900 text-white'
                      : 'border-primary-300 hover:border-primary-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* 尺码选择 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium tracking-wide">尺码</h3>
              <button className="text-sm text-primary-600 hover:text-primary-900">
                尺码指南
              </button>
            </div>
            <div className="flex gap-2">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border transition-colors ${
                    selectedSize === size
                      ? 'border-primary-900 bg-primary-900 text-white'
                      : 'border-primary-300 hover:border-primary-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 数量选择 */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3 tracking-wide">数量</h3>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border border-primary-300 hover:bg-primary-50 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 px-4 py-2 border-t border-b border-primary-300 text-center focus:outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border border-primary-300 hover:bg-primary-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* 购买按钮 */}
          <div className="flex gap-4 mb-8">
            <button onClick={handleAddToCart} className="flex-1 btn-secondary">
              <ShoppingCart size={20} className="inline mr-2" />
              加入购物车
            </button>
            <button onClick={handleBuyNow} className="flex-1 btn-primary">
              立即购买
            </button>
            <button className="p-3 border border-primary-300 hover:bg-primary-50 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* 服务保障 */}
          <div className="border-t border-primary-200 pt-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-primary-600">
                <Truck size={18} className="mr-3" />
                <span>满99元免运费</span>
              </div>
              <div className="flex items-center text-primary-600">
                <RotateCcw size={18} className="mr-3" />
                <span>7天无理由退换</span>
              </div>
              <div className="flex items-center text-primary-600">
                <Shield size={18} className="mr-3" />
                <span>正品保证</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 商品详情和评价 */}
      <div className="border-t border-primary-200">
        {/* 标签页 */}
        <div className="flex border-b border-primary-200">
          <button className="px-8 py-4 border-b-2 border-primary-900 font-medium">
            商品详情
          </button>
          <button className="px-8 py-4 text-primary-600 hover:text-primary-900 transition-colors">
            用户评价 ({productData.reviews.length})
          </button>
        </div>

        {/* 商品详情内容 */}
        <div className="py-8">
          <h3 className="text-lg font-medium mb-4 tracking-wide">产品信息</h3>
          <ul className="space-y-2 text-primary-600">
            {productData.details.map((detail, index) => (
              <li key={index}>• {detail}</li>
            ))}
          </ul>
        </div>

        {/* 用户评价 */}
        <div className="py-8 border-t border-primary-200">
          <h3 className="text-lg font-medium mb-6 tracking-wide">用户评价</h3>
          <div className="space-y-6">
            {productData.reviews.map((review) => (
              <div key={review.id} className="border-b border-primary-200 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-medium mr-4">{review.user}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-primary-300'}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-primary-600">{review.date}</span>
                </div>
                <p className="text-primary-600 mb-2">{review.content}</p>
                <span className="text-sm text-primary-500">尺码：{review.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
