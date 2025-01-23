// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini Painter',
  description: '3D miniature painting reference platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo */}
                  <span className="text-xl font-bold">Mini Painter</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="border-b-2 border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Gallery
                  </a>
                  <a href="/upload" className="border-b-2 border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Upload
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}