import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'

// 模拟商品数据
const allProducts = [
  { id: 1, name: '羊绒混纺大衣', price: 899, category: 'new', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop' },
  { id: 2, name: '真丝衬衫', price: 459, category: 'new', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop' },
  { id: 3, name: '高腰阔腿裤', price: 329, category: 'new', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop' },
  { id: 4, name: '针织开衫', price: 279, category: 'sale', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop' },
  { id: 5, name: '经典风衣', price: 799, category: 'sale', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop' },
  { id: 6, name: '纯棉T恤', price: 129, category: 'sale', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop' },
  { id: 7, name: '牛仔外套', price: 399, category: 'sale', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
  { id: 8, name: '连衣裙', price: 499, category: 'sale', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
  { id: 9, name: '羊毛毛衣', price: 359, category: 'new', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop' },
  { id: 10, name: '皮革短裙', price: 549, category: 'new', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop' },
  { id: 11, name: '丝绸半身裙', price: 429, category: 'sale', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop' },
  { id: 12, name: '羽绒服', price: 999, category: 'new', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop' },
]

export default function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  // 筛选商品
  let filteredProducts = allProducts
  if (category) {
    filteredProducts = allProducts.filter((p) => p.category === category)
  }

  // 排序
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      default:
        return 0
    }
  })

  const getCategoryTitle = () => {
    if (category === 'new') return '新品上市'
    if (category === 'sale') return '热销推荐'
    return '全部商品'
  }

  return (
    <div className="container-custom py-8 md:py-12">
      {/* 页面标题和筛选 */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-light tracking-wider">
          {getCategoryTitle()}
        </h1>
        <div className="flex items-center space-x-4">
          {/* 排序 */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-primary-300 rounded-none focus:outline-none focus:border-primary-900 text-sm"
          >
            <option value="default">默认排序</option>
            <option value="price-low">价格从低到高</option>
            <option value="price-high">价格从高到低</option>
          </select>

          {/* 筛选按钮（移动端） */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden p-2 border border-primary-300 hover:bg-primary-50 transition-colors"
            aria-label="筛选"
          >
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* 侧边栏筛选（桌面端） */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-lg font-medium mb-4 tracking-wide">分类筛选</h3>
            <div className="space-y-2 mb-8">
              <Link
                to="/products"
                className={`block py-2 px-4 hover:bg-primary-50 transition-colors ${
                  !category ? 'bg-primary-900 text-white' : ''
                }`}
              >
                全部商品
              </Link>
              <Link
                to="/products?category=new"
                className={`block py-2 px-4 hover:bg-primary-50 transition-colors ${
                  category === 'new' ? 'bg-primary-900 text-white' : ''
                }`}
              >
                新品上市
              </Link>
              <Link
                to="/products?category=sale"
                className={`block py-2 px-4 hover:bg-primary-50 transition-colors ${
                  category === 'sale' ? 'bg-primary-900 text-white' : ''
                }`}
              >
                热销推荐
              </Link>
            </div>

            <h3 className="text-lg font-medium mb-4 tracking-wide">价格区间</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">0-200元</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">200-500元</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">500-1000元</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">1000元以上</span>
              </label>
            </div>
          </div>
        </aside>

        {/* 商品网格 */}
        <div className="flex-1">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-primary-600">暂无商品</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
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
                    {product.category === 'new' && (
                      <div className="absolute top-2 right-2 bg-primary-900 text-white text-xs px-2 py-1 tracking-wide">
                        NEW
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm md:text-base mb-2 tracking-wide group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary-900 font-medium">¥{product.price}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 移动端筛选面板 */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium tracking-wide">筛选</h3>
              <button onClick={() => setShowFilters(false)}>关闭</button>
            </div>

            <div className="mb-8">
              <h4 className="font-medium mb-4">分类</h4>
              <div className="space-y-2">
                <Link
                  to="/products"
                  className={`block py-2 px-4 ${!category ? 'bg-primary-900 text-white' : ''}`}
                  onClick={() => setShowFilters(false)}
                >
                  全部商品
                </Link>
                <Link
                  to="/products?category=new"
                  className={`block py-2 px-4 ${category === 'new' ? 'bg-primary-900 text-white' : ''}`}
                  onClick={() => setShowFilters(false)}
                >
                  新品上市
                </Link>
                <Link
                  to="/products?category=sale"
                  className={`block py-2 px-4 ${category === 'sale' ? 'bg-primary-900 text-white' : ''}`}
                  onClick={() => setShowFilters(false)}
                >
                  热销推荐
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">价格区间</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">0-200元</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">200-500元</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">500-1000元</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">1000元以上</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
