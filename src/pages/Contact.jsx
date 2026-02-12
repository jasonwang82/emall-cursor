import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 模拟发送邮件
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="py-12 md:py-16">
      {/* 页面标题 */}
      <div className="bg-neutral-50 py-12 md:py-16 mb-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            联系我们
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            我们随时为您服务。如有任何问题或建议，欢迎通过以下方式联系我们。
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* 联系信息 */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-light mb-6">联系方式</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">邮箱</h3>
                    <a
                      href="mailto:service@fashion.com"
                      className="text-neutral-600 hover:text-primary transition-colors"
                    >
                      service@fashion.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">客服热线</h3>
                    <p className="text-neutral-600">400-888-8888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">公司地址</h3>
                    <p className="text-neutral-600">
                      中国上海市静安区<br />
                      南京西路1234号<br />
                      时尚广场 20F
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">工作时间</h3>
                    <p className="text-neutral-600">
                      周一至周五：9:00 - 18:00<br />
                      周六至周日：10:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6">
              <h3 className="font-medium mb-3">常见问题</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    如何查看订单状态？
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    退换货政策说明
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    如何选择合适的尺码？
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    配送时间和运费说明
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 p-6 md:p-8">
              <h2 className="text-xl font-light mb-6">给我们留言</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 mb-6 animate-fade-in">
                  <p className="font-medium mb-1">感谢您的留言！</p>
                  <p className="text-sm">我们已收到您的消息，会尽快回复您。</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-700">
                      您的姓名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-neutral-700">
                      邮箱地址 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    主题 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="请简要描述您的问题或建议"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    留言内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field"
                    rows="6"
                    placeholder="请详细描述您的问题或建议..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary flex items-center">
                  <Send size={18} className="mr-2" />
                  发送留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 地图或其他信息 */}
      <div className="container-custom mt-12">
        <div className="bg-neutral-100 h-96 flex items-center justify-center">
          <p className="text-neutral-500">地图位置 - 敬请期待</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
