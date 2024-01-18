import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SPS-BLOG',
  description: 'This a blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col bg-white'>
          <NavBar />
          <div className='flex mt-8 mx-auto p-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}