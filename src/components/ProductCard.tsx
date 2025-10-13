import { Link } from 'react-router-dom'
import { Product } from '@/store/useStore'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card className="group overflow-hidden border-0 shadow-none">
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden bg-muted aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart
              size={18}
              className={isLiked ? 'fill-current' : ''}
            />
          </Button>
          {product.rating && product.rating >= 4.5 && (
            <Badge className="absolute top-3 left-3" variant="secondary">
              热销
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-3">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-medium mb-1 line-clamp-2 hover:underline">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">¥ {product.price.toFixed(2)}</p>
            {product.reviews && (
              <p className="text-xs text-muted-foreground">
                {product.reviews} 评价
              </p>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
