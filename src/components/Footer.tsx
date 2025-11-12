import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-light tracking-wider mb-4">FASHION</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              简约优雅的时尚女装，为都市女性打造高品质穿搭体验。
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-medium mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/orders" className="hover:text-black transition-smooth">
                  订单查询
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  配送信息
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  退换货政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  品牌故事
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  门店地址
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  加入我们
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-smooth">
                  隐私政策
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">联系我们</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@fashion.com"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-smooth"
              >
                <Mail size={16} />
                <span>contact@fashion.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-600 hover:text-black transition-smooth">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-smooth">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-smooth">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 FASHION. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
