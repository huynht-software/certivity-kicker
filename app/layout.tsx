import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Certivity Kicker',
  description: 'Keeping score for bragging rights',
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
        <div className="absolute w-screen top-[60px]">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
