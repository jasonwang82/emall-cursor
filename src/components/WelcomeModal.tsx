import { X } from 'lucide-react'
import { useStore } from '../store/useStore'
import { Link } from 'react-router-dom'

export default function WelcomeModal() {
  const { showWelcomeModal, setShowWelcomeModal } = useStore()

  if (!showWelcomeModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white max-w-lg w-full mx-4 relative animate-slide-up">
        <button
          onClick={() => setShowWelcomeModal(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-smooth"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">欢迎光临</h2>
          <p className="text-gray-600 mb-6">
            新用户注册即享首单9折优惠，更有专属会员福利等你解锁。
          </p>

          <div className="space-y-3">
            <Link
              to="/register"
              className="block w-full btn-primary text-center"
              onClick={() => setShowWelcomeModal(false)}
            >
              立即注册
            </Link>
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="w-full px-6 py-3 text-gray-600 hover:text-black transition-smooth"
            >
              随便逛逛
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            已有账户？
            <Link
              to="/login"
              className="text-black ml-1 hover:underline"
              onClick={() => setShowWelcomeModal(false)}
            >
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
