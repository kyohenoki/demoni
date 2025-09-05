import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '何もない',
  description: 'ほんとに何もないよ'
}

export default function NotFound() {
  return (
    <div className="px-5 py-4">
      <h1 className="text-[1.15rem]">何もない</h1>
      <div className="text-[1.15rem] text-[var(--shou)]">
        <Link href="/" className="hover:text-[var(--green)]">
          入口へ戻る
        </Link>
      </div>
    </div>
  )
}
