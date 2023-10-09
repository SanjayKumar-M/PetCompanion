import { NextAuthProvider } from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetCompanion',
  description: 'Buy your best companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
      {children}
      </NextAuthProvider>
      </body>
    </html>
  )
}


