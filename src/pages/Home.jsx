import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const { isAuthenticated } = useAuth()

  // Hero slides
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop',
      title: '2025 春季新品',
      subtitle: '简约时尚 · 优雅姿态',
      cta: '立即选购'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop',
      title: '经典系列',
      subtitle: '永不过时的时尚选择',
      cta: '探索更多'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=900&fit=crop',
      title: '限时优惠',
      subtitle: '全场低至5折起',
      cta: '查看优惠'
    }
  ]

  // New arrivals
  const newArrivals = [
    {
      id: 1,
      name: '针织连衣裙',
      price: 299,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
      tag: 'NEW'
    },
    {
      id: 2,
      name: '羊毛大衣',
      price: 899,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop',
      tag: 'NEW'
    },
    {
      id: 3,
      name: '真丝衬衫',
      price: 399,
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop',
      tag: 'NEW'
    },
    {
      id: 4,
      name: '高腰西裤',
      price: 359,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      tag: 'NEW'
    }
  ]

  // Best sellers
  const bestSellers = [
    {
      id: 5,
      name: '基础款T恤',
      price: 129,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
      tag: 'HOT'
    },
    {
      id: 6,
      name: '牛仔外套',
      price: 499,
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=600&fit=crop',
      tag: 'HOT'
    },
    {
      id: 7,
      name: '阔腿裤',
      price: 329,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop',
      tag: 'HOT'
    },
    {
      id: 8,
      name: '羊绒毛衣',
      price: 599,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      tag: 'HOT'
    }
  ]

  // Auto play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Show welcome modal for new visitors
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited && !isAuthenticated) {
      setShowWelcomeModal(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [isAuthenticated])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 tracking-wide">{slide.subtitle}</p>
                <Link to="/products" className="btn-primary inline-block">
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 hover:bg-opacity-100 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 hover:bg-opacity-100 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">新品上架</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group card-hover"
            >
              <div className="relative overflow-hidden mb-4 aspect-[2/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-primary-black text-white text-xs px-2 py-1 tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="text-sm md:text-base font-medium mb-2">{product.name}</h3>
              <p className="text-sm md:text-base text-primary-gray">¥ {product.price}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products?filter=new" className="btn-secondary">
            查看全部新品
          </Link>
        </div>
      </section>

      {/* Category Banner */}
      <section className="bg-primary-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/products?category=dress" className="group relative overflow-hidden h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=600&fit=crop"
                alt="连衣裙系列"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-2">连衣裙系列</h3>
                  <p className="text-sm tracking-wide">优雅从容</p>
                </div>
              </div>
            </Link>
            <Link to="/products?category=outerwear" className="group relative overflow-hidden h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&h=600&fit=crop"
                alt="外套系列"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-2">外套系列</h3>
                  <p className="text-sm tracking-wide">经典百搭</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">热销商品</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group card-hover"
            >
              <div className="relative overflow-hidden mb-4 aspect-[2/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="text-sm md:text-base font-medium mb-2">{product.name}</h3>
              <p className="text-sm md:text-base text-primary-gray">¥ {product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome Modal for New Users */}
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 relative animate-fadeIn">
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-light tracking-wide mb-4 text-center">欢迎来到 FASHION</h3>
            <p className="text-center text-primary-gray mb-6">
              新用户注册即享<span className="text-xl font-medium text-primary-black mx-1">8折</span>优惠
            </p>
            <div className="space-y-3">
              <Link
                to="/register"
                onClick={() => setShowWelcomeModal(false)}
                className="btn-primary block text-center w-full"
              >
                立即注册
              </Link>
              <button
                onClick={() => setShowWelcomeModal(false)}
                className="btn-secondary block text-center w-full"
              >
                随便看看
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
