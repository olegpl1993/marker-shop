import './nullstyle.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MARKER SHOP',
  description: 'Online store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
