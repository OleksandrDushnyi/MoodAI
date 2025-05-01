import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Header() {
  const { isLogin, logout } = useAuth()

  return (
    <header className="w-full bg-white/30 backdrop-blur-md border-b border-white/40 shadow-md py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">🧠 Капсульний Психолог</Link>
        </h1>
        <nav className="space-x-4 text-lg">
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>

          {isLogin ? (
            <>
              <Link to="/dashboard">Панель</Link>
              <Link to="/forum">Форум</Link>
              <button onClick={logout} className="text-red-600 ml-4">Вийти</button>
            </>
           
          ) : (
            <Link to="/login">Увійти</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
