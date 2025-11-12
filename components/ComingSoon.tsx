import { Clock } from 'lucide-react'

interface ComingSoonProps {
  title?: string
  description?: string
}

export default function ComingSoon({ 
  title = '敬请期待', 
  description = '该功能正在开发中，即将上线' 
}: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
          <Clock className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
          {title}
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
}
