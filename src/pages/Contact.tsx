import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里添加发送邮件逻辑
    console.log('Contact form:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-center">
        联系我们
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* 左侧：联系信息 */}
        <div>
          <h2 className="text-xl font-light tracking-wide mb-6">联系方式</h2>
          
          <div className="space-y-6 mb-8">
            {/* 邮箱 */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-900 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium mb-1">邮箱</h3>
                <p className="text-primary-600">service@fashion.com</p>
                <p className="text-sm text-primary-500 mt-1">
                  我们会在24小时内回复您的邮件
                </p>
              </div>
            </div>

            {/* 电话 */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-900 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium mb-1">客服热线</h3>
                <p className="text-primary-600">400-888-8888</p>
                <p className="text-sm text-primary-500 mt-1">
                  周一至周日 9:00-21:00
                </p>
              </div>
            </div>

            {/* 地址 */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-900 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium mb-1">公司地址</h3>
                <p className="text-primary-600">
                  中国上海市静安区南京西路1000号
                </p>
                <p className="text-sm text-primary-500 mt-1">
                  欢迎到店参观
                </p>
              </div>
            </div>

            {/* 营业时间 */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-900 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium mb-1">营业时间</h3>
                <p className="text-primary-600">周一至周日: 10:00 - 22:00</p>
                <p className="text-sm text-primary-500 mt-1">
                  节假日正常营业
                </p>
              </div>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="border-t border-primary-200 pt-8">
            <h2 className="text-xl font-light tracking-wide mb-4">常见问题</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">如何查看订单状态？</h3>
                <p className="text-sm text-primary-600">
                  登录后在"我的订单"页面可以查看所有订单的详细状态。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">支持哪些支付方式？</h3>
                <p className="text-sm text-primary-600">
                  我们支持支付宝、微信支付、银行卡支付等主流支付方式。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">退换货政策是什么？</h3>
                <p className="text-sm text-primary-600">
                  支持7天无理由退换货，商品需保持吊牌完整且未穿着使用。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">多久可以收到商品？</h3>
                <p className="text-sm text-primary-600">
                  一般情况下，下单后3-5个工作日内送达，偏远地区可能需要更长时间。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：联系表单 */}
        <div>
          <h2 className="text-xl font-light tracking-wide mb-6">发送消息</h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-8 text-center">
              <Send size={48} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-medium mb-2 text-green-700">
                消息已发送！
              </h3>
              <p className="text-green-600">
                感谢您的反馈，我们会尽快回复您。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名 */}
              <div>
                <label className="block text-sm mb-2 tracking-wide">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* 邮箱 */}
              <div>
                <label className="block text-sm mb-2 tracking-wide">
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="input-field"
                  placeholder="请输入您的邮箱"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* 主题 */}
              <div>
                <label className="block text-sm mb-2 tracking-wide">
                  主题 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="input-field"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option value="">请选择主题</option>
                  <option value="order">订单咨询</option>
                  <option value="product">商品咨询</option>
                  <option value="return">退换货</option>
                  <option value="payment">支付问题</option>
                  <option value="suggestion">意见建议</option>
                  <option value="other">其他</option>
                </select>
              </div>

              {/* 留言 */}
              <div>
                <label className="block text-sm mb-2 tracking-wide">
                  留言内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  className="input-field resize-none"
                  rows={6}
                  placeholder="请详细描述您的问题或建议..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* 提交按钮 */}
              <button type="submit" className="w-full btn-primary">
                <Send size={20} className="inline mr-2" />
                发送消息
              </button>

              <p className="text-xs text-center text-primary-600">
                提交即表示您同意我们的隐私政策
              </p>
            </form>
          )}
        </div>
      </div>

      {/* 地图占位 */}
      <div className="mt-16 border border-primary-200">
        <div className="h-96 bg-primary-100 flex items-center justify-center">
          <p className="text-primary-600">地图占位区域</p>
        </div>
      </div>
    </div>
  )
}
