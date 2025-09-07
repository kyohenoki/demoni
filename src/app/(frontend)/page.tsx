import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import Link from 'next/link'
import { getPayload } from 'payload'

export default async function Home() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  return (
    <div className="px-5 py-4">
      <h1 className="text-[1.15rem]">Payloadの環境を1から作ってみる</h1>
      <div className="text-[1.15rem] text-[var(--shou)]">
        {user && <h2>やあ！{user.email}</h2>}
        {!user && <h2>ログインしてね！</h2>}
        <div>
          <Link href={payloadConfig.routes.admin}>Adminへ進む</Link>
        </div>
      </div>
    </div>
  )
}
