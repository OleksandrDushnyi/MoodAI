import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <Header />
      <main className="flex-1 flex justify-center items-start pt-20 pb-6 px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
