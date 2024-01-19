import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'P4B-BLOG',
  description: 'This a blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='bg-gradient-to-t from-smalt-100 to-smalt-50 min-h-screen' /* className='min-h-screen flex flex-col bg-white' */>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
