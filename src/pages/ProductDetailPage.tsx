import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Heart, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import { useStore } from '../store/useStore'

const productData = {
  id: 1,
  name: '简约V领连衣裙',
  price: 299,
  images: [
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&sat=-100',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&brightness=1.1'
  ],
  category: 'dress',
  description: '这款连衣裙采用优质面料，简约设计，适合多种场合穿着。V领设计修饰颈部线条，腰部收腰设计展现完美身材曲线。',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: '黑色', value: '#000000' },
    { name: '白色', value: '#FFFFFF' },
    { name: '米色', value: '#E8D9C5' }
  ],
  rating: 4.8,
  reviews: 156,
  details: [
    '面料：优质棉混纺',
    '版型：修身',
    '厚度：适中',
    '弹性：微弹',
    '洗涤：建议手洗或干洗'
  ]
}

const reviewsData = [
  {
    id: 1,
    user: '张**',
    rating: 5,
    date: '2025-10-10',
    content: '质量很好，面料舒适，版型也很合身。非常满意的一次购物！',
    size: 'M'
  },
  {
    id: 2,
    user: '李**',
    rating: 5,
    date: '2025-10-08',
    content: '颜色和图片一样，做工精致，穿着很显气质。会回购的！',
    size: 'S'
  },
  {
    id: 3,
    user: '王**',
    rating: 4,
    date: '2025-10-05',
    content: '整体不错，就是尺码偏小了一点，建议购买大一号。',
    size: 'L'
  }
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const addToCart = useStore(state => state.addToCart)
  
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(productData.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    addToCart(
      {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.images[0],
        category: productData.category
      },
      selectedSize,
      selectedColor.name
    )
    alert('已加入购物车')
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    handleAddToCart()
    navigate('/cart')
  }

  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Images */}
        <div>
          <div className="relative bg-gray-100 aspect-[3/4] mb-4">
            <img
              src={productData.images[currentImage]}
              alt={productData.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + productData.images.length) % productData.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-smooth"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % productData.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-smooth"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`aspect-[3/4] border-2 ${
                  currentImage === index ? 'border-black' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-light mb-2">{productData.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(productData.rating) ? 'fill-black' : 'fill-gray-300'}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {productData.rating} ({productData.reviews} 评价)
              </span>
            </div>
          </div>
          
          <div className="text-3xl font-light mb-8">¥ {productData.price.toFixed(2)}</div>

          <div className="space-y-6 mb-8">
            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">颜色</span>
                <span className="text-sm text-gray-600">{selectedColor.name}</span>
              </div>
              <div className="flex space-x-3">
                {productData.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor.name === color.name ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">尺码</span>
                <a href="#" className="text-sm underline">尺码指南</a>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border transition-smooth ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="font-medium block mb-3">数量</span>
              <div className="flex items-center border border-gray-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-smooth"
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-smooth"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 mb-8">
            <button onClick={handleBuyNow} className="w-full btn-primary">
              立即购买
            </button>
            <button onClick={handleAddToCart} className="w-full btn-secondary">
              加入购物车
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 hover:bg-gray-50 transition-smooth"
            >
              <Heart size={20} className={isLiked ? 'fill-black' : ''} />
              <span>收藏</span>
            </button>
          </div>

          {/* Description */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium mb-3">商品详情</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{productData.description}</p>
            <ul className="space-y-1 text-sm text-gray-600">
              {productData.details.map((detail, index) => (
                <li key={index}>• {detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-light mb-8">用户评价 ({productData.reviews})</h2>
        <div className="space-y-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{review.user}</span>
                  <span className="text-sm text-gray-500">尺码: {review.size}</span>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-black' : 'fill-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
