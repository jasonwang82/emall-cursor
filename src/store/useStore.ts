import { create } from 'zustand'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
  sizes?: string[]
  colors?: string[]
  rating?: number
  reviews?: number
}

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

interface StoreState {
  user: User | null
  cart: CartItem[]
  showWelcomeModal: boolean
  setUser: (user: User | null) => void
  addToCart: (item: Product, size?: string, color?: string) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  setShowWelcomeModal: (show: boolean) => void
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  cart: [],
  showWelcomeModal: !localStorage.getItem('visited'),
  
  setUser: (user) => set({ user }),
  
  addToCart: (item, size, color) => set((state) => {
    const existingItem = state.cart.find(
      (cartItem) => cartItem.id === item.id && 
                   cartItem.selectedSize === size && 
                   cartItem.selectedColor === color
    )
    
    if (existingItem) {
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id && 
          cartItem.selectedSize === size && 
          cartItem.selectedColor === color
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      }
    }
    
    return {
      cart: [...state.cart, { ...item, quantity: 1, selectedSize: size, selectedColor: color }],
    }
  }),
  
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  
  clearCart: () => set({ cart: [] }),
  
  setShowWelcomeModal: (show) => {
    if (!show) {
      localStorage.setItem('visited', 'true')
    }
    set({ showWelcomeModal: show })
  },
}))
