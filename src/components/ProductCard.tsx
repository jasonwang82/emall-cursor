import { Link } from 'react-router-dom'
import { Product } from '../store/useStore'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsLiked(!isLiked)
          }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart
            size={18}
            className={isLiked ? 'fill-black' : ''}
          />
        </button>
      </div>
      <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name}</h3>
      <p className="text-sm text-gray-600">¥ {product.price.toFixed(2)}</p>
    </Link>
  )
}
