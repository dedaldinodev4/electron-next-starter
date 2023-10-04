import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GitHubRepoProvider } from './contexts/GitHubRepoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React +  Electron',
  description: 'App Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GitHubRepoProvider>
          {children}
        </GitHubRepoProvider>
      </body>
    </html>
  )
}
