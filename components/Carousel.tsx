'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselSlide {
  id: number
  image: string
  title: string
  subtitle: string
  link: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80',
    title: '2024 春季新品',
    subtitle: '探索本季必备单品',
    link: '/products?category=new'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
    title: '简约风格',
    subtitle: '打造极简衣橱',
    link: '/products?category=minimal'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80',
    title: '限时特惠',
    subtitle: '精选商品低至5折',
    link: '/products?category=sale'
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setCurrent((current + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-4">
              <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4 animate-[fadeInUp_0.8s_ease-out]">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                {slide.subtitle}
              </p>
              <Link
                href={slide.link}
                className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
              >
                立即选购
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 transition-all"
        aria-label="上一张"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 transition-all"
        aria-label="下一张"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`转到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  )
}
