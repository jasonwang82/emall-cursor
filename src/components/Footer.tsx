import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-50 border-t border-primary-200 mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div>
            <h3 className="text-xl font-light tracking-[0.2em] mb-4">FASHION</h3>
            <p className="text-sm text-primary-600 leading-relaxed">
              专注于为中国女性提供高品质、时尚的服装，让每一位女性都能找到属于自己的风格。
            </p>
          </div>

          {/* 快捷链接 */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">快捷链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-primary-600 hover:text-primary-900 transition-colors">
                  全部商品
                </Link>
              </li>
              <li>
                <Link to="/products?category=new" className="text-primary-600 hover:text-primary-900 transition-colors">
                  新品上市
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-primary-600 hover:text-primary-900 transition-colors">
                  订单查询
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-600 hover:text-primary-900 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 客户服务 */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm text-primary-600">
              <li>配送说明</li>
              <li>退换货政策</li>
              <li>隐私政策</li>
              <li>使用条款</li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-primary-600">
                <Mail size={16} className="mr-2" />
                <a href="mailto:service@fashion.com" className="hover:text-primary-900 transition-colors">
                  service@fashion.com
                </a>
              </li>
              <li className="flex items-center text-primary-600">
                <Phone size={16} className="mr-2" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-start text-primary-600">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>中国上海市静安区南京西路1000号</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-primary-200 pt-8 text-center">
          <p className="text-sm text-primary-600">
            © 2025 FASHION. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}
