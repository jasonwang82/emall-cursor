import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-light tracking-widest mb-4">
              FASHION
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              为中国现代女性打造的时尚购物平台，简约而不简单。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wide">
              快速链接
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  新品上市
                </Link>
              </li>
              <li>
                <Link to="/products?sale=true" className="hover:text-white transition-colors">
                  特惠专区
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors">
                  我的订单
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wide">
              客户服务
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  配送信息
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  退换货政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  尺码指南
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wide">
              联系方式
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:service@fashion.com" className="hover:text-white transition-colors">
                  service@fashion.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>中国上海市静安区南京西路1234号</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              支持支付方式：支付宝 | 微信支付 | 银行卡
            </div>
            <div className="text-sm text-neutral-500">
              © 2024 FASHION. 保留所有权利
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
