import type { Metadata } from 'next'

import inter from 'next/font/local'
import './mitame.css'
import './fonts/hiragino.css'

const Inter = inter({
  src: './fonts/InterVariable.woff2'
})

export const metadata: Metadata = {
  title: 'Payloadの環境',
  description: '自分のやり方を取り入れながら'
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={Inter.className}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
