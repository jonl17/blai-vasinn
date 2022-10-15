import { Marquee } from '@src/components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <Marquee items={Array.from(Array(50)).map((_, idx) => `${2022 - idx}`)} />
    </div>
  )
}

export default Home
