'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

// Mock products data
const products = [
  { id: '1', name: '纯色圆领T恤', price: 199, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', isNew: true },
  { id: '2', name: '高腰阔腿裤', price: 399, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80', isNew: true },
  { id: '3', name: '宽松针织衫', price: 299, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80' },
  { id: '4', name: '雪纺衬衫', price: 259, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80' },
  { id: '5', name: '风衣外套', price: 699, originalPrice: 899, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80' },
  { id: '6', name: '修身连衣裙', price: 499, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80' },
  { id: '7', name: '西装外套', price: 599, originalPrice: 799, image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80' },
  { id: '8', name: '牛仔裤', price: 359, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80' },
  { id: '9', name: '长款毛衣', price: 399, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' },
  { id: '10', name: '百褶半身裙', price: 329, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80' },
  { id: '11', name: '羊毛大衣', price: 999, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80' },
  { id: '12', name: '针织开衫', price: 359, image: 'https://images.unsplash.com/photo-1517298257259-f72ccd2db9c8?w=800&q=80' },
]

export default function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('default')

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-2">
          全部商品
        </h1>
        <p className="text-gray-600">
          共 {products.length} 件商品
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>筛选</span>
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">排序：</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-none pr-6 text-sm cursor-pointer hover:opacity-70 transition-opacity"
            >
              <option value="default">默认</option>
              <option value="price-asc">价格从低到高</option>
              <option value="price-desc">价格从高到低</option>
              <option value="newest">最新上架</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="mb-8 p-6 bg-gray-50 animate-[slideDown_0.3s_ease-out]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">分类</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>上衣</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>连衣裙</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>裤装</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>外套</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">尺码</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>XS</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>S</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>M</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>L</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>XL</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">颜色</h3>
              <div className="flex flex-wrap gap-2">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-black transition-colors" />
                <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-black transition-colors" />
                <button className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-300 hover:border-black transition-colors" />
                <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-black transition-colors" />
                <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 hover:border-black transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">价格区间</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>¥0 - ¥200</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>¥200 - ¥500</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>¥500 - ¥1000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>¥1000+</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              清除筛选
            </button>
            <button className="btn-primary text-sm px-8 py-2">
              应用筛选
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="btn-secondary">
          加载更多
        </button>
      </div>
    </div>
  )
}
