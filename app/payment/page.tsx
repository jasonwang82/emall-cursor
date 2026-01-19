'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CreditCard, Smartphone, Check } from 'lucide-react'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat' | 'card'>('alipay')
  const total = 797

  const paymentMethods = [
    {
      id: 'alipay' as const,
      name: '支付宝',
      icon: <Smartphone className="w-6 h-6" />,
      description: '使用支付宝扫码支付'
    },
    {
      id: 'wechat' as const,
      name: '微信支付',
      icon: <Smartphone className="w-6 h-6" />,
      description: '使用微信扫码支付'
    },
    {
      id: 'card' as const,
      name: '银行卡支付',
      icon: <CreditCard className="w-6 h-6" />,
      description: '支持借记卡和信用卡'
    }
  ]

  return (
    <div className="min-h-[80vh] py-12">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-wider mb-2">
            选择支付方式
          </h1>
          <p className="text-gray-600">
            订单金额：<span className="text-2xl font-medium ml-2">¥{total}</span>
          </p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`w-full p-6 border-2 transition-colors text-left ${
                paymentMethod === method.id
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-700">{method.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
                {paymentMethod === method.id && (
                  <Check className="w-6 h-6 text-black" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Payment Content */}
        <div className="bg-gray-50 p-8">
          {(paymentMethod === 'alipay' || paymentMethod === 'wechat') && (
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-white flex items-center justify-center mb-4">
                <p className="text-gray-500">
                  {paymentMethod === 'alipay' ? '支付宝' : '微信'}支付二维码
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                请使用{paymentMethod === 'alipay' ? '支付宝' : '微信'}扫描二维码完成支付
              </p>
              <p className="text-xs text-gray-500">
                支付完成后页面将自动跳转
              </p>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="max-w-md mx-auto">
              <h3 className="font-medium mb-6">银行卡信息</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">卡号</label>
                  <input
                    type="text"
                    placeholder="请输入银行卡号"
                    maxLength={19}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">有效期</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="CVV"
                      maxLength={3}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">持卡人姓名</label>
                  <input
                    type="text"
                    placeholder="请输入持卡人姓名"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-8">
          <Link
            href="/checkout"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            ← 返回上一步
          </Link>
          {paymentMethod === 'card' && (
            <button className="btn-primary">
              立即支付 ¥{total}
            </button>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 text-sm text-gray-700">
          <p className="font-medium mb-2">安全提示</p>
          <ul className="space-y-1 text-xs">
            <li>• 所有支付信息均经过加密处理</li>
            <li>• 我们不会保存您的完整卡号信息</li>
            <li>• 如有疑问，请联系客服：400-888-8888</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
