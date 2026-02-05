import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// 模拟数据
const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    title: '2025春季新品',
    subtitle: '温柔与力量的完美平衡',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    title: '极简主义',
    subtitle: '少即是多的时尚哲学',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop',
    title: '都市丽人',
    subtitle: '优雅从容的现代女性',
  },
]

const newProducts = [
  {
    id: 1,
    name: '羊绒混纺大衣',
    price: 899,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: '真丝衬衫',
    price: 459,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: '高腰阔腿裤',
    price: 329,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop',
  },
  {
    id: 4,
    name: '针织开衫',
    price: 279,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
  },
]

const hotProducts = [
  {
    id: 5,
    name: '经典风衣',
    price: 799,
    sales: 1580,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
  },
  {
    id: 6,
    name: '纯棉T恤',
    price: 129,
    sales: 3200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
  },
  {
    id: 7,
    name: '牛仔外套',
    price: 399,
    sales: 2100,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
  },
  {
    id: 8,
    name: '连衣裙',
    price: 499,
    sales: 1890,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)

  useEffect(() => {
    // 检查是否是新用户（简单实现）
    const isNewUser = !localStorage.getItem('visited')
    if (isNewUser) {
      setShowWelcomeModal(true)
      localStorage.setItem('visited', 'true')
    }

    // 自动轮播
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div>
      {/* 轮播图 */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl tracking-wide">{banner.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* 轮播控制按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 transition-all"
          aria-label="上一张"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 transition-all"
          aria-label="下一张"
        >
          <ChevronRight size={24} />
        </button>

        {/* 轮播指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`跳转到第${index + 1}张`}
            />
          ))}
        </div>
      </section>

      {/* 新品推荐 */}
      <section className="container-custom py-16 md:py-20">
        <h2 className="section-title">新品上市</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="relative overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary-900 text-white text-xs px-2 py-1 tracking-wide">
                  NEW
                </div>
              </div>
              <h3 className="text-sm md:text-base mb-2 tracking-wide group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-primary-900 font-medium">¥{product.price}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products?category=new" className="btn-secondary">
            查看更多新品
          </Link>
        </div>
      </section>

      {/* 热销商品 */}
      <section className="bg-accent-beige py-16 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">热销推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="relative overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm md:text-base mb-2 tracking-wide group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary-900 font-medium mb-1">¥{product.price}</p>
                <p className="text-xs text-primary-600">已售 {product.sales}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products?category=sale" className="btn-primary">
              查看全部热销
            </Link>
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="container-custom py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">品牌理念</h2>
          <p className="text-primary-600 leading-relaxed mb-6">
            我们相信，时尚不仅仅是追逐潮流，更是表达自我、展现个性的方式。
            每一件服装都经过精心设计，只为让您在任何场合都能自信从容。
          </p>
          <p className="text-primary-600 leading-relaxed">
            从面料选择到剪裁工艺，我们坚持品质至上，为您带来舒适与美感并存的穿着体验。
          </p>
        </div>
      </section>

      {/* 新用户欢迎弹窗 */}
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full p-8 relative animate-fadeIn">
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="absolute top-4 right-4 text-primary-600 hover:text-primary-900"
              aria-label="关闭"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-light tracking-wider mb-4">欢迎来到 FASHION</h3>
            <p className="text-primary-600 mb-6">
              首次注册即享8折优惠，开启您的时尚之旅
            </p>
            <div className="space-y-3">
              <Link
                to="/register"
                className="block w-full btn-primary text-center"
                onClick={() => setShowWelcomeModal(false)}
              >
                立即注册
              </Link>
              <button
                onClick={() => setShowWelcomeModal(false)}
                className="block w-full btn-secondary text-center"
              >
                稍后再说
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
