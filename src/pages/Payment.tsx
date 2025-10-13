import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone, CheckCircle } from 'lucide-react'

export default function Payment() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('alipay')
  const [isPaying, setIsPaying] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const orderTotal = 1817

  const handlePay = () => {
    setIsPaying(true)
    // 模拟支付过程
    setTimeout(() => {
      setIsPaying(false)
      setPaymentSuccess(true)
      // 3秒后跳转到订单页面
      setTimeout(() => {
        navigate('/orders')
      }, 3000)
    }, 2000)
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-12">
        <div className="text-center max-w-md">
          <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
          <h2 className="text-3xl font-light tracking-wider mb-4">支付成功</h2>
          <p className="text-primary-600 mb-8">
            感谢您的购买，订单正在处理中
          </p>
          <button
            onClick={() => navigate('/orders')}
            className="btn-primary"
          >
            查看订单
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-8">
        选择支付方式
      </h1>

      <div className="max-w-2xl mx-auto">
        {/* 订单金额 */}
        <div className="bg-accent-beige p-6 mb-8 text-center">
          <p className="text-primary-600 mb-2">应付金额</p>
          <p className="text-4xl font-light tracking-wider">¥{orderTotal}</p>
        </div>

        {/* 支付方式选择 */}
        <div className="space-y-4 mb-8">
          {/* 支付宝 */}
          <div
            onClick={() => setPaymentMethod('alipay')}
            className={`border-2 p-6 cursor-pointer transition-colors ${
              paymentMethod === 'alipay'
                ? 'border-primary-900 bg-primary-50'
                : 'border-primary-200 hover:border-primary-400'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'alipay'}
                onChange={() => setPaymentMethod('alipay')}
                className="mr-4"
              />
              <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="#1677FF">
                <path d="M9.6 9.6c-.3.3-.6.6-.6 1.2v2.4c0 .6.3.9.6 1.2.3.3.6.6 1.2.6h2.4c.6 0 .9-.3 1.2-.6.3-.3.6-.6.6-1.2v-2.4c0-.6-.3-.9-.6-1.2-.3-.3-.6-.6-1.2-.6h-2.4c-.6 0-.9.3-1.2.6z" />
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.7 15.9c-1.2.6-2.7.9-4.2.9-2.4 0-4.5-.9-6-2.4-1.2-1.2-1.8-2.7-1.8-4.2 0-2.4 1.5-4.5 3.6-5.4.9-.3 1.8-.6 2.7-.6 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5-.3 2.1-1.2 3.9-2.7 5.1z" />
              </svg>
              <div className="flex-1">
                <h3 className="font-medium mb-1">支付宝支付</h3>
                <p className="text-sm text-primary-600">推荐使用支付宝App扫码支付</p>
              </div>
            </div>
          </div>

          {/* 微信支付 */}
          <div
            onClick={() => setPaymentMethod('wechat')}
            className={`border-2 p-6 cursor-pointer transition-colors ${
              paymentMethod === 'wechat'
                ? 'border-primary-900 bg-primary-50'
                : 'border-primary-200 hover:border-primary-400'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'wechat'}
                onChange={() => setPaymentMethod('wechat')}
                className="mr-4"
              />
              <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="#07C160">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
                <path d="M23.759 11.75c0-3.573-3.42-6.47-7.632-6.47-4.211 0-7.631 2.897-7.631 6.47 0 3.574 3.42 6.47 7.631 6.47a9.417 9.417 0 0 0 2.564-.361.79.79 0 0 1 .628.088l1.68.915a.314.314 0 0 0 .152.054.255.255 0 0 0 .249-.25c0-.063-.023-.123-.044-.187l-.334-1.308a.537.537 0 0 1 .188-.584c1.66-1.223 2.549-2.963 2.549-4.837zM18.058 9.388a1.03 1.03 0 0 1-1.036 1.029 1.03 1.03 0 0 1-1.037-1.029 1.03 1.03 0 0 1 1.037-1.028 1.03 1.03 0 0 1 1.036 1.028zm3.67 0a1.03 1.03 0 0 1-1.037 1.029 1.03 1.03 0 0 1-1.036-1.029 1.03 1.03 0 0 1 1.036-1.028 1.03 1.03 0 0 1 1.037 1.028z" />
              </svg>
              <div className="flex-1">
                <h3 className="font-medium mb-1">微信支付</h3>
                <p className="text-sm text-primary-600">使用微信App扫码支付</p>
              </div>
            </div>
          </div>

          {/* 银行卡支付 */}
          <div
            onClick={() => setPaymentMethod('card')}
            className={`border-2 p-6 cursor-pointer transition-colors ${
              paymentMethod === 'card'
                ? 'border-primary-900 bg-primary-50'
                : 'border-primary-200 hover:border-primary-400'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="mr-4"
              />
              <CreditCard size={32} className="mr-4 text-primary-600" />
              <div className="flex-1">
                <h3 className="font-medium mb-1">银行卡支付</h3>
                <p className="text-sm text-primary-600">支持借记卡和信用卡</p>
              </div>
            </div>
          </div>
        </div>

        {/* 支付详情（银行卡支付时显示） */}
        {paymentMethod === 'card' && (
          <div className="border border-primary-200 p-6 mb-8">
            <h3 className="font-medium mb-4 tracking-wide">银行卡信息</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">卡号</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="请输入银行卡号"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">有效期</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">CVV</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="CVV"
                    maxLength={3}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">持卡人姓名</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="请输入持卡人姓名"
                />
              </div>
            </form>
          </div>
        )}

        {/* 扫码支付提示（支付宝/微信） */}
        {(paymentMethod === 'alipay' || paymentMethod === 'wechat') && (
          <div className="border border-primary-200 p-8 mb-8 text-center">
            <Smartphone size={64} className="mx-auto mb-4 text-primary-400" />
            <p className="text-primary-600 mb-2">
              请使用{paymentMethod === 'alipay' ? '支付宝' : '微信'}App扫描下方二维码完成支付
            </p>
            <div className="w-48 h-48 mx-auto bg-primary-100 flex items-center justify-center mt-4">
              <p className="text-primary-600">二维码占位</p>
            </div>
          </div>
        )}

        {/* 支付按钮 */}
        <button
          onClick={handlePay}
          disabled={isPaying}
          className="w-full btn-primary text-lg py-4"
        >
          {isPaying ? '支付中...' : `确认支付 ¥${orderTotal}`}
        </button>

        {/* 安全提示 */}
        <div className="mt-6 text-center text-sm text-primary-600">
          <p>您的支付信息将被安全加密传输</p>
        </div>
      </div>
    </div>
  )
}
