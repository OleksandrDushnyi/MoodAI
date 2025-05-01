import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username.trim()) return

    const userId = Date.now().toString()
    localStorage.setItem('user-id', userId)
    localStorage.setItem('user-name', username.trim())

    navigate('/forum')
  }

  return (
    <div className="h-full bg-gray-100 flex justify-center items-center py-16"> 
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">Вхід до форуму</h1>
        <input
          type="text"
          placeholder="Введіть ім’я або нікнейм"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Увійти
        </button>
      </div>
    </div>
  
  )
}

export default LoginPage
