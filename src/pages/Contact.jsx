import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock form submission
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">联系我们</h1>
        <p className="text-primary-gray max-w-2xl mx-auto">
          如有任何问题或建议，请随时与我们联系。我们会在24小时内回复您的邮件。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Cards */}
        <div className="border border-primary-lightgray p-6 text-center hover:shadow-md transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-beige rounded-full mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-lg font-medium mb-2">邮箱</h3>
          <p className="text-primary-gray text-sm mb-2">support@fashion.com</p>
          <p className="text-primary-gray text-sm">sales@fashion.com</p>
        </div>

        <div className="border border-primary-lightgray p-6 text-center hover:shadow-md transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-beige rounded-full mb-4">
            <Phone size={24} />
          </div>
          <h3 className="text-lg font-medium mb-2">客服热线</h3>
          <p className="text-primary-gray text-sm mb-2">400-888-8888</p>
          <p className="text-primary-gray text-sm">工作时间：9:00-18:00</p>
        </div>

        <div className="border border-primary-lightgray p-6 text-center hover:shadow-md transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-beige rounded-full mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="text-lg font-medium mb-2">公司地址</h3>
          <p className="text-primary-gray text-sm">上海市静安区</p>
          <p className="text-primary-gray text-sm">南京西路XXX号</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="border border-primary-lightgray p-8">
          <h2 className="text-2xl font-light tracking-wide mb-6 text-center">发送邮件</h2>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">发送成功！</h3>
              <p className="text-primary-gray">我们已收到您的消息，会尽快回复您。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">姓名 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">邮箱 *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">主题 *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2">消息 *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field min-h-[150px] resize-y"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                发送消息
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-light tracking-wide mb-8 text-center">常见问题</h2>
        <div className="space-y-6">
          <div className="border-b border-primary-lightgray pb-6">
            <h3 className="font-medium mb-2">如何查看物流信息？</h3>
            <p className="text-sm text-primary-gray">
              登录账户后，在"我的订单"页面可以查看订单详情和物流追踪信息。
            </p>
          </div>
          <div className="border-b border-primary-lightgray pb-6">
            <h3 className="font-medium mb-2">退换货政策是什么？</h3>
            <p className="text-sm text-primary-gray">
              我们支持7天无理由退换货。商品需保持吊牌完整，未经使用或洗涤。
            </p>
          </div>
          <div className="border-b border-primary-lightgray pb-6">
            <h3 className="font-medium mb-2">支持哪些支付方式？</h3>
            <p className="text-sm text-primary-gray">
              我们支持支付宝、微信支付、银行卡等多种支付方式。
            </p>
          </div>
          <div className="border-b border-primary-lightgray pb-6">
            <h3 className="font-medium mb-2">配送时间是多久？</h3>
            <p className="text-sm text-primary-gray">
              一般情况下，订单会在48小时内发货，5-7个工作日送达。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
