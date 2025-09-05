import inter from 'next/font/local'

import './mitame.css'
import './fonts/hiragino.css'

const Inter = inter({
  src: './fonts/InterVariable.woff2'
})

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={Inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
