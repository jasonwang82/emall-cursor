import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { isFirstVisit, dismissWelcome } = useAuth()
  const [showWelcome, setShowWelcome] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (isFirstVisit) {
      setShowWelcome(true)
    }
  }, [isFirstVisit])

  const handleCloseWelcome = () => {
    setShowWelcome(false)
    dismissWelcome()
  }

  // 轮播图数据
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop',
      title: '2024 春季新品',
      subtitle: '优雅从容，自在生活',
      link: '/products?collection=spring2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop',
      title: '经典系列',
      subtitle: '永不过时的时尚选择',
      link: '/products?collection=classic'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop',
      title: '限时特惠',
      subtitle: '精选商品 5 折起',
      link: '/products?sale=true'
    }
  ]

  // 新品推荐
  const newArrivals = [
    {
      id: 1,
      name: '羊绒混纺大衣',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      name: '真丝衬衫',
      price: 599,
      image: 'https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      name: '高腰阔腿裤',
      price: 499,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
    },
    {
      id: 4,
      name: '针织开衫',
      price: 399,
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
    }
  ]

  // 热销商品
  const bestSellers = [
    {
      id: 5,
      name: '基础款白T恤',
      price: 199,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      sales: '热销 10000+ 件'
    },
    {
      id: 6,
      name: '修身牛仔裤',
      price: 399,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
      sales: '热销 8000+ 件'
    },
    {
      id: 7,
      name: '轻薄羽绒服',
      price: 899,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
      sales: '热销 6000+ 件'
    },
    {
      id: 8,
      name: '羊毛围巾',
      price: 299,
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop',
      sales: '热销 5000+ 件'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="animate-fade-in">
      {/* 新用户欢迎弹窗 */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 md:p-12 relative animate-slide-up">
            <button
              onClick={handleCloseWelcome}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900"
              aria-label="关闭"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-center">
              欢迎来到 FASHION
            </h2>
            <p className="text-neutral-600 mb-6 text-center leading-relaxed">
              新用户注册立享 <span className="text-secondary font-medium">8.5 折</span> 优惠
            </p>
            <div className="space-y-3">
              <Link
                to="/login"
                className="btn-primary w-full text-center block"
                onClick={handleCloseWelcome}
              >
                立即注册
              </Link>
              <button
                onClick={handleCloseWelcome}
                className="w-full text-neutral-600 hover:text-neutral-900 py-2"
              >
                稍后再说
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 轮播图 */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.link} className="inline-block bg-white text-primary px-8 py-3 hover:bg-neutral-100 transition-colors">
                    立即选购
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 轮播控制按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 transition-all"
          aria-label="上一张"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 transition-all"
          aria-label="下一张"
        >
          <ChevronRight size={24} />
        </button>

        {/* 指示器 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`跳转到第 ${index + 1} 张`}
            />
          ))}
        </div>
      </section>

      {/* 新品推荐 */}
      <section className="container-custom py-16 md:py-24">
        <h2 className="section-title">新品上市</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
            >
              <div className="product-image mb-3 md:mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-sm md:text-base font-light mb-1 md:mb-2">
                {product.name}
              </h3>
              <p className="text-sm md:text-base font-medium">
                ¥ {product.price}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link to="/products" className="btn-secondary">
            查看更多新品
          </Link>
        </div>
      </section>

      {/* 热销商品 */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">热销榜单</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card bg-white"
              >
                <div className="product-image mb-3 md:mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-light mb-1 md:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base font-medium mb-1">
                    ¥ {product.price}
                  </p>
                  <p className="text-xs text-neutral-500">{product.sales}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
            简约而不简单
          </h2>
          <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
            我们致力于为中国现代女性提供高品质、设计简约的时尚单品。
            每一件商品都经过精心挑选，追求简洁的设计、舒适的面料和精致的细节。
            让时尚回归本质，让穿着成为一种享受。
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
