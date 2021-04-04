import Link from 'next/link'

export default function Home () {
  return (
    <Link href="/api/fotos"><a>Fotos API</a></Link>
    <Link href="/api/lol"><a>League Of Legends API</a></Link>
  )
}
