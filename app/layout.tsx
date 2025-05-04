import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Certivity Kicker',
  description: 'Keeping score for bragging rights',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-screen px-4 my-4 pt-[60px] overscroll-y-auto">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
