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
      <body>{children}</body>
    </html>
  )
}
