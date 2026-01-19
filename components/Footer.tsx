import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-light tracking-wider mb-4">FASHION</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              为现代女性提供简约时尚的高品质服装
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-medium mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/help" className="text-link">帮助中心</Link>
              </li>
              <li>
                <Link href="/orders" className="text-link">订单查询</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-link">配送信息</Link>
              </li>
              <li>
                <Link href="/returns" className="text-link">退换货政策</Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-medium mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="text-link">品牌故事</Link>
              </li>
              <li>
                <Link href="/stores" className="text-link">门店查询</Link>
              </li>
              <li>
                <Link href="/careers" className="text-link">加入我们</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-link">隐私政策</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@fashion.com" className="text-link">
                  support@fashion.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 FASHION. 版权所有</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-link">服务条款</Link>
              <Link href="/privacy" className="text-link">隐私政策</Link>
              <span>沪ICP备xxxxxxxx号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
