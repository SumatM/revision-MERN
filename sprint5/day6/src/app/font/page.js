import { Rosario } from 'next/font/google'

const roboto = Rosario({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

 const FontPage = () => {
//console.log(roboto)
  return (
    <div>
      <h1>Font Page</h1>
      <p className={roboto.className}>
        This is to just check the font optimization proecss
      </p>
    </div>
  )
}

export default FontPage;
