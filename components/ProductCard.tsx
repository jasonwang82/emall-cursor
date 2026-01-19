import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
}

export default function ProductCard({ id, name, price, originalPrice, image, isNew }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {isNew && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 tracking-wide">
            NEW
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-light tracking-wide group-hover:opacity-70 transition-opacity">
          {name}
        </h3>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-sm font-medium">¥{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">¥{originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
