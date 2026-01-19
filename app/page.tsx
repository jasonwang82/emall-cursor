import Carousel from '@/components/Carousel'
import ProductCard from '@/components/ProductCard'
import WelcomeModal from '@/components/WelcomeModal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Mock product data
const newProducts = [
  {
    id: '1',
    name: '纯色圆领T恤',
    price: 199,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    isNew: true
  },
  {
    id: '2',
    name: '高腰阔腿裤',
    price: 399,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    isNew: true
  },
  {
    id: '3',
    name: '宽松针织衫',
    price: 299,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    isNew: true
  },
  {
    id: '4',
    name: '雪纺衬衫',
    price: 259,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    isNew: true
  }
]

const hotProducts = [
  {
    id: '5',
    name: '风衣外套',
    price: 699,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80'
  },
  {
    id: '6',
    name: '修身连衣裙',
    price: 499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
  },
  {
    id: '7',
    name: '西装外套',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80'
  },
  {
    id: '8',
    name: '牛仔裤',
    price: 359,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80'
  }
]

export default function Home() {
  return (
    <>
      <WelcomeModal />
      
      {/* Hero Carousel */}
      <Carousel />

      {/* New Arrivals Section */}
      <section className="container-custom py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">新品上市</h2>
          <Link href="/products?category=new" className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity">
            <span>查看全部</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Hot Sales Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">热销商品</h2>
            <Link href="/products?category=hot" className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity">
              <span>查看全部</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="container-custom py-16 md:py-24">
        <div className="relative h-[400px] md:h-[500px] bg-secondary flex items-center justify-center text-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-4">
              简约之美
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              探索极简风格，释放真我个性
            </p>
            <Link href="/products" className="btn-primary">
              开始购物
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
