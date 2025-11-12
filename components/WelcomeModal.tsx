'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modal from './Modal'
import { Gift } from 'lucide-react'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal')
    if (!hasSeenModal) {
      setTimeout(() => {
        setIsOpen(true)
      }, 1000)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenWelcomeModal', 'true')
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-4 rounded-full">
            <Gift className="w-12 h-12" />
          </div>
        </div>
        
        <h2 className="text-2xl font-light tracking-wide mb-4">
          欢迎来到 FASHION
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          注册即享新人专属优惠
          <br />
          首单立减50元
        </p>
        
        <div className="space-y-3">
          <Link
            href="/login?register=true"
            className="block btn-primary w-full text-center"
            onClick={handleClose}
          >
            立即注册
          </Link>
          <button
            onClick={handleClose}
            className="block w-full text-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            稍后再说
          </button>
        </div>
      </div>
    </Modal>
  )
}
