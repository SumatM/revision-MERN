import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl'>My App</h1>
      <Link href='/login'>Login</Link>
      <br/>
      <br/>
      <Link href='/about'>About</Link>
    </div>
  )
}
