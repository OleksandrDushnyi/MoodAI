// routes/AppRouter.tsx
import { Navigate, Route, Routes } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'
import HomePage from '../pages/HomePage'
import Dashboard from '../pages/DashboardPage'
import Layout from '../components/Layout'
import AboutPage from '../pages/AboutPage'
// import HomePage from '../pages/HomePage'
// import Dashboard from '../pages/Dashboard'
// import LoginPage from '../pages/LoginPage'
// import { useAuth } from '../hooks/useAuth' // твій кастомний хук

const AppRouter = () => {
//   const { isLogin } = useAuth()

  return (
    <Routes>
      <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      {/* <Route path="/login" element={<LoginPage />} />  */}

      <Route
        path="/dashboard"
        // element={isLogin ? <Layout><Dashboard /></Layout> : <Navigate to="/login" replace />}
        element={<Layout><Dashboard /></Layout>}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
