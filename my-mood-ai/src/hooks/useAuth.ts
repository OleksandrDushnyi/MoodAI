import { useState } from 'react'

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    return !!localStorage.getItem('token')
  })

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsLogin(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsLogin(false)
  }


  return { isLogin, login, logout }
}
