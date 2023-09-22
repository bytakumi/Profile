import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '鈴木拓海 ポートフォリオ',
  description: '鈴木拓海のポートフォリオサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="flex justify-center flex-col mx-auto bg-gradient-to-br from-violet-900 via-fuchsia-400 to-fuchsia-700 bg-fixed font-mono">
        {children}
        </main>
      </body>
    </html>
  )
}
