import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Future Of Art',
  description: 'The Future of Art Exhibition. The culmination of the physical exhibition at the MIN Museum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={inter.className} h-full="true" >{children}</body>
    </html>
  )
}
