import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    return !localStorage.getItem('hasVisited')
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const dismissWelcome = () => {
    localStorage.setItem('hasVisited', 'true')
    setIsFirstVisit(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isFirstVisit,
        login,
        logout,
        dismissWelcome,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
