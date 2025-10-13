import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { Product } from '../store/useStore'

const allProducts: Product[] = [
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
  },
  {
    id: 5,
    name: '复古格纹西装外套',
    price: 599,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop',
    category: 'tops'
  },
  {
    id: 6,
    name: '基础款T恤',
    price: 99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
    category: 'tops'
  },
  {
    id: 7,
    name: '修身牛仔裤',
    price: 279,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop',
    category: 'bottoms'
  },
  {
    id: 8,
    name: '雪纺印花裙',
    price: 369,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    category: 'dress'
  },
  {
    id: 9,
    name: '长款风衣',
    price: 699,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop',
    category: 'tops'
  },
  {
    id: 10,
    name: '蕾丝吊带裙',
    price: 399,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop',
    category: 'dress'
  },
  {
    id: 11,
    name: '羊毛混纺大衣',
    price: 899,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=600&fit=crop',
    category: 'tops'
  },
  {
    id: 12,
    name: '百褶半身裙',
    price: 229,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop',
    category: 'bottoms'
  }
]

export default function ProductListPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('newest')

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }
    
    if (priceRange !== 'all') {
      if (priceRange === 'low' && product.price > 200) return false
      if (priceRange === 'medium' && (product.price < 200 || product.price > 500)) return false
      if (priceRange === 'high' && product.price < 500) return false
    }
    
    return true
  })

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-light mb-2">全部商品</h1>
        <p className="text-gray-600">共 {filteredProducts.length} 件商品</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center justify-center space-x-2 border border-gray-300 py-3"
        >
          <Filter size={20} />
          <span>筛选</span>
        </button>

        {/* Filters */}
        <aside
          className={`${
            showFilters ? 'block' : 'hidden'
          } md:block w-full md:w-64 space-y-8 animate-slide-down md:animate-none`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">分类</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="md:hidden"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => setSelectedCategory('all')}
                  className="mr-2"
                />
                <span className="text-sm">全部</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'dress'}
                  onChange={() => setSelectedCategory('dress')}
                  className="mr-2"
                />
                <span className="text-sm">连衣裙</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'tops'}
                  onChange={() => setSelectedCategory('tops')}
                  className="mr-2"
                />
                <span className="text-sm">上装</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'bottoms'}
                  onChange={() => setSelectedCategory('bottoms')}
                  className="mr-2"
                />
                <span className="text-sm">下装</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">价格区间</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === 'all'}
                  onChange={() => setPriceRange('all')}
                  className="mr-2"
                />
                <span className="text-sm">全部</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === 'low'}
                  onChange={() => setPriceRange('low')}
                  className="mr-2"
                />
                <span className="text-sm">¥0 - ¥200</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === 'medium'}
                  onChange={() => setPriceRange('medium')}
                  className="mr-2"
                />
                <span className="text-sm">¥200 - ¥500</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === 'high'}
                  onChange={() => setPriceRange('high')}
                  className="mr-2"
                />
                <span className="text-sm">¥500+</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">排序</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 focus:border-black outline-none"
            >
              <option value="newest">最新上架</option>
              <option value="price-low">价格从低到高</option>
              <option value="price-high">价格从高到低</option>
              <option value="popular">最受欢迎</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">未找到符合条件的商品</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
