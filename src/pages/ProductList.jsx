import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

const ProductList = () => {
  const [searchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'dress', name: '连衣裙' },
    { id: 'tops', name: '上装' },
    { id: 'bottoms', name: '下装' },
    { id: 'outerwear', name: '外套' }
  ]

  const sortOptions = [
    { value: 'featured', label: '推荐' },
    { value: 'price-low', label: '价格从低到高' },
    { value: 'price-high', label: '价格从高到低' },
    { value: 'newest', label: '最新上架' }
  ]

  const priceRanges = [
    { value: 'all', label: '全部价格' },
    { value: '0-200', label: '¥0 - ¥200' },
    { value: '200-500', label: '¥200 - ¥500' },
    { value: '500-1000', label: '¥500 - ¥1000' },
    { value: '1000+', label: '¥1000+' }
  ]

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: '针织连衣裙',
      price: 299,
      originalPrice: 499,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
      category: 'dress',
      tag: 'NEW',
      colors: ['black', 'beige']
    },
    {
      id: 2,
      name: '羊毛大衣',
      price: 899,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop',
      category: 'outerwear',
      tag: 'HOT',
      colors: ['black', 'camel']
    },
    {
      id: 3,
      name: '真丝衬衫',
      price: 399,
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop',
      category: 'tops',
      tag: 'NEW',
      colors: ['white', 'black']
    },
    {
      id: 4,
      name: '高腰西裤',
      price: 359,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      category: 'bottoms',
      colors: ['black', 'gray']
    },
    {
      id: 5,
      name: '基础款T恤',
      price: 129,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
      category: 'tops',
      tag: 'HOT',
      colors: ['white', 'black', 'gray']
    },
    {
      id: 6,
      name: '牛仔外套',
      price: 499,
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=600&fit=crop',
      category: 'outerwear',
      colors: ['blue']
    },
    {
      id: 7,
      name: '阔腿裤',
      price: 329,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop',
      category: 'bottoms',
      colors: ['black', 'beige']
    },
    {
      id: 8,
      name: '羊绒毛衣',
      price: 599,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      category: 'tops',
      tag: 'HOT',
      colors: ['beige', 'gray']
    },
    {
      id: 9,
      name: '印花连衣裙',
      price: 459,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=600&fit=crop',
      category: 'dress',
      colors: ['floral']
    },
    {
      id: 10,
      name: '风衣外套',
      price: 799,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
      category: 'outerwear',
      colors: ['beige', 'black']
    },
    {
      id: 11,
      name: '短款夹克',
      price: 559,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
      category: 'outerwear',
      tag: 'NEW',
      colors: ['black']
    },
    {
      id: 12,
      name: '百褶半身裙',
      price: 279,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop',
      category: 'bottoms',
      colors: ['black', 'beige']
    }
  ]

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''))
      if (max) {
        if (product.price < parseInt(min) || product.price > parseInt(max)) {
          return false
        }
      } else {
        if (product.price < parseInt(min)) {
          return false
        }
      }
    }
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light tracking-wide mb-2">
          {categories.find(c => c.id === selectedCategory)?.name || '全部商品'}
        </h1>
        <p className="text-primary-gray">{sortedProducts.length} 件商品</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-24">
            <div className="border border-primary-lightgray p-6 mb-6">
              <h3 className="text-sm font-medium tracking-wide mb-4 uppercase">分类</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-sm w-full text-left py-1 hover:text-primary-black transition-colors ${
                        selectedCategory === category.id
                          ? 'text-primary-black font-medium'
                          : 'text-primary-gray'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-primary-lightgray p-6">
              <h3 className="text-sm font-medium tracking-wide mb-4 uppercase">价格区间</h3>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      onClick={() => setPriceRange(range.value)}
                      className={`text-sm w-full text-left py-1 hover:text-primary-black transition-colors ${
                        priceRange === range.value
                          ? 'text-primary-black font-medium'
                          : 'text-primary-gray'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary-lightgray">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 text-sm"
            >
              <SlidersHorizontal size={16} />
              <span>筛选</span>
            </button>

            <div className="flex items-center space-x-2 ml-auto">
              <span className="text-sm text-primary-gray">排序：</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-primary-lightgray px-4 py-2 pr-8 text-sm focus:outline-none focus:border-primary-black cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {sortedProducts.map((product) => (
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
                    <span className={`absolute top-2 left-2 text-white text-xs px-2 py-1 tracking-wide ${
                      product.tag === 'NEW' ? 'bg-primary-black' : 'bg-red-600'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1">
                      特惠
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-medium mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-sm md:text-base text-primary-black font-medium">¥ {product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xs md:text-sm text-primary-gray line-through">¥ {product.originalPrice}</p>
                  )}
                </div>
                {product.colors && (
                  <div className="flex space-x-1 mt-2">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-primary-lightgray"
                        style={{
                          backgroundColor:
                            color === 'beige' ? '#f5f1ed' :
                            color === 'camel' ? '#c19a6b' :
                            color === 'gray' ? '#6b6b6b' :
                            color === 'floral' ? '#ffc0cb' :
                            color === 'blue' ? '#4169e1' :
                            color
                        }}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-primary-gray">+{product.colors.length - 3}</span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary-gray text-lg">暂无符合条件的商品</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
