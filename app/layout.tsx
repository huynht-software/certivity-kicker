import LoadingDiv from '@/components/LoadingDiv'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Suspense } from 'react'
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
        <Suspense fallback={<LoadingDiv />}>
          <div className="w-screen flex justify-center my-4 pt-[60px] overscroll-y-auto">
            <div className="w-full px-4 lg:w-2/3">{children}</div>
          </div>
        </Suspense>
        <Toaster />
      </body>
    </html>
  )
}
