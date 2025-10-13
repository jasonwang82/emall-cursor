import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import WelcomeModal from '../components/WelcomeModal'
import { Product } from '../store/useStore'

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    title: '2025 春季新品',
    subtitle: '简约设计 优雅穿搭'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    title: '精选连衣裙',
    subtitle: '展现你的独特魅力'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop',
    title: '全场7折起',
    subtitle: '限时优惠 不容错过'
  }
]

const newProducts: Product[] = [
  {
    id: 1,
    name: '简约V领连衣裙',
    price: 299,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
    category: 'dress'
  },
  {
    id: 2,
    name: '经典白衬衫',
    price: 199,
    image: 'https://images.unsplash.com/photo-1624206112918-1b5b3e3c3b25?w=400&h=600&fit=crop',
    category: 'tops'
  },
  {
    id: 3,
    name: '高腰阔腿裤',
    price: 259,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    category: 'bottoms'
  },
  {
    id: 4,
    name: '优雅针织开衫',
    price: 329,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
    category: 'tops'
  }
]

const hotProducts: Product[] = [
  {
    id: 5,
    name: '复古格纹西装外套',
    price: 599,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop',
    category: 'tops',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 6,
    name: '基础款T恤',
    price: 99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
    category: 'tops',
    rating: 4.6,
    reviews: 243
  },
  {
    id: 7,
    name: '修身牛仔裤',
    price: 279,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop',
    category: 'bottoms',
    rating: 4.7,
    reviews: 189
  },
  {
    id: 8,
    name: '雪纺印花裙',
    price: 369,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    category: 'dress',
    rating: 4.9,
    reviews: 312
  }
]

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <>
      <WelcomeModal />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-light mb-4 animate-fade-in">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl animate-fade-in">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Banner Controls */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-smooth"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-smooth"
        >
          <ChevronRight size={24} />
        </button>

        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-custom py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-3">新品上市</h2>
          <p className="text-gray-600">发现本季最新设计</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Hot Products */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-3">热销推荐</h2>
            <p className="text-gray-600">人气单品 口碑之选</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16 md:py-20">
        <div className="bg-accent-beige p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">订阅我们的邮件</h2>
          <p className="text-gray-700 mb-8">第一时间获取新品资讯和专属优惠</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 border border-gray-300 focus:border-black outline-none"
            />
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-smooth">
              订阅
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
