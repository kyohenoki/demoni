import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payloadの環境',
  description: '自分のやり方を取り入れながら'
}

export default function Home() {
  return (
    <div className="px-5 py-4">
      <h1 className="text-[1.15rem]">Payloadの環境を1から作ってみる</h1>
      <div className="text-[1.15rem] text-[var(--shou)]">
        <h2>昨日と一昨日で少し試してみたくらいだけど、全体的な構造はなんとなくわかった気がする</h2>
        <h2>テンプレートに全部入りだから、GitHubからコードを引用しつつ、自分のやり方を流し込んでいきながら、組み立てていこうと思う</h2>
      </div>
    </div>
  )
}
