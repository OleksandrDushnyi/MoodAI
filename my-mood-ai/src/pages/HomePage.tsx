import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Ласкаво просимо!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Це ваш особистий AI-психолог. Оберіть настрій і отримайте пораду, підтримку чи натхнення 🧠💛
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
      >
        Почати
      </Link>
    </div>
  )
}

export default HomePage
