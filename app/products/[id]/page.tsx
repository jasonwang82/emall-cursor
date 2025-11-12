'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, Truck, RefreshCcw, Shield, Star } from 'lucide-react'

// Mock product data
const product = {
  id: '1',
  name: '纯色圆领T恤',
  price: 199,
  originalPrice: 259,
  description: '采用优质纯棉面料，柔软舒适，透气性好。简约设计，百搭实用，适合日常休闲穿着。',
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&q=80',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80',
  ],
  colors: ['black', 'white', 'gray'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  material: '100% 纯棉',
  care: '机洗，低温熨烫'
}

// Mock reviews
const reviews = [
  {
    id: 1,
    user: '李**',
    rating: 5,
    date: '2024-10-10',
    comment: '质量很好，面料柔软舒适，版型也很正。非常满意！',
    size: 'M',
    color: '黑色'
  },
  {
    id: 2,
    user: '王**',
    rating: 5,
    date: '2024-10-08',
    comment: '简约大方，很百搭。已经购买多件了。',
    size: 'S',
    color: '白色'
  },
  {
    id: 3,
    user: '张**',
    rating: 4,
    date: '2024-10-05',
    comment: '整体不错，就是物流稍微慢了点。',
    size: 'L',
    color: '灰色'
  }
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details')

  const colorNames: Record<string, string> = {
    black: '黑色',
    white: '白色',
    gray: '灰色'
  }

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-black transition-colors">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-black transition-colors">商品</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[3/4] bg-gray-100 mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-[3/4] bg-gray-100 border-2 transition-colors ${
                  selectedImage === index ? 'border-black' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-light tracking-wide mb-4">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-medium">¥{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ¥{product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {reviews.length} 条评价
            </span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">颜色</span>
              {selectedColor && (
                <span className="text-sm text-gray-600">
                  已选：{colorNames[selectedColor]}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-colors ${
                    selectedColor === color ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={colorNames[color]}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">尺码</span>
              {selectedSize && (
                <span className="text-sm text-gray-600">已选：{selectedSize}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 border transition-colors ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Link href="#" className="text-sm underline mt-2 inline-block text-gray-600 hover:text-black transition-colors">
              尺码指南
            </Link>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <span className="text-sm font-medium block mb-3">数量</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 mb-8">
            <button className="btn-primary w-full">
              加入购物车
            </button>
            <button className="btn-secondary w-full">
              立即购买
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity">
              <Heart className="w-5 h-5" />
              <span>收藏</span>
            </button>
            <button className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity">
              <Share2 className="w-5 h-5" />
              <span>分享</span>
            </button>
          </div>

          {/* Features */}
          <div className="space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5" />
              <span>满299元免运费</span>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCcw className="w-5 h-5" />
              <span>30天无理由退换</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5" />
              <span>正品保证</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-8 py-4 transition-colors ${
              activeTab === 'details'
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            商品详情
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-8 py-4 transition-colors ${
              activeTab === 'reviews'
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            用户评价 ({reviews.length})
          </button>
        </div>

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div className="py-8">
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">产品信息</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex">
                  <span className="w-24">材质：</span>
                  <span>{product.material}</span>
                </div>
                <div className="flex">
                  <span className="w-24">护理：</span>
                  <span>{product.care}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="py-8">
            <div className="max-w-3xl space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'fill-black' : 'fill-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="text-sm text-gray-500">
                    尺码：{review.size} | 颜色：{review.color}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
