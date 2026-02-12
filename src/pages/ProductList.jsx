import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

const ProductList = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  // 模拟商品数据
  const products = [
    {
      id: 1,
      name: '羊绒混纺大衣',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
      category: 'outerwear',
      isNew: true,
      onSale: true
    },
    {
      id: 2,
      name: '真丝衬衫',
      price: 599,
      image: 'https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=600&h=800&fit=crop',
      category: 'tops',
      isNew: true
    },
    {
      id: 3,
      name: '高腰阔腿裤',
      price: 499,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
      category: 'bottoms',
      isNew: true
    },
    {
      id: 4,
      name: '针织开衫',
      price: 399,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
      category: 'outerwear',
      onSale: true
    },
    {
      id: 5,
      name: '基础款白T恤',
      price: 199,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      category: 'tops'
    },
    {
      id: 6,
      name: '修身牛仔裤',
      price: 399,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
      category: 'bottoms'
    },
    {
      id: 7,
      name: '轻薄羽绒服',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
      category: 'outerwear',
      onSale: true
    },
    {
      id: 8,
      name: '羊毛围巾',
      price: 299,
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop',
      category: 'accessories'
    },
    {
      id: 9,
      name: '长款连衣裙',
      price: 699,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
      category: 'dresses',
      isNew: true
    },
    {
      id: 10,
      name: '皮革手提包',
      price: 899,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
      category: 'accessories'
    },
    {
      id: 11,
      name: '羊毛混纺西装外套',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop',
      category: 'outerwear',
      isNew: true
    },
    {
      id: 12,
      name: '绸缎半身裙',
      price: 499,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
      category: 'bottoms'
    }
  ]

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'outerwear', name: '外套' },
    { id: 'tops', name: '上衣' },
    { id: 'bottoms', name: '下装' },
    { id: 'dresses', name: '连衣裙' },
    { id: 'accessories', name: '配饰' }
  ]

  const filteredProducts = products.filter(
    product => selectedCategory === 'all' || product.category === selectedCategory
  )

  return (
    <div className="container-custom py-8 md:py-12">
      {/* 页面标题 */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-2">
          全部商品
        </h1>
        <p className="text-neutral-600">
          共 {filteredProducts.length} 件商品
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* 侧边栏筛选（桌面端） */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-lg font-medium mb-4">商品分类</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-neutral-100'
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-medium mb-4">价格区间</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">¥0 - ¥299</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">¥300 - ¥599</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">¥600 - ¥999</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">¥1000+</span>
                </label>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-medium mb-4">颜色</h3>
              <div className="flex flex-wrap gap-2">
                {['黑色', '白色', '灰色', '米色', '蓝色', '红色'].map(color => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-neutral-300 hover:border-primary text-sm transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* 主内容区 */}
        <div className="flex-1">
          {/* 移动端筛选和排序 */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-neutral-300"
            >
              <SlidersHorizontal size={18} />
              <span>筛选</span>
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-neutral-300"
            >
              <option value="newest">最新上架</option>
              <option value="price-low">价格从低到高</option>
              <option value="price-high">价格从高到低</option>
              <option value="popular">最受欢迎</option>
            </select>
          </div>

          {/* 桌面端排序 */}
          <div className="hidden md:flex items-center justify-end mb-6">
            <label className="mr-3 text-sm text-neutral-600">排序方式：</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-neutral-300"
            >
              <option value="newest">最新上架</option>
              <option value="price-low">价格从低到高</option>
              <option value="price-high">价格从高到低</option>
              <option value="popular">最受欢迎</option>
            </select>
          </div>

          {/* 商品网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >
                <div className="product-image mb-3 md:mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1">
                      新品
                    </span>
                  )}
                  {product.onSale && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1">
                      特惠
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-light mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <p className="text-sm md:text-base font-medium">
                    ¥ {product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-xs md:text-sm text-neutral-400 line-through">
                      ¥ {product.originalPrice}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-neutral-300 hover:bg-neutral-100 transition-colors">
                上一页
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 border transition-colors ${
                    page === 1
                      ? 'bg-primary text-white border-primary'
                      : 'border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-neutral-300 hover:bg-neutral-100 transition-colors">
                下一页
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
