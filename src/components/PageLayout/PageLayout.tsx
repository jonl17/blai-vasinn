import Marquee from '@src/components/Marquee'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

type Props = {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(50)).map((_, idx) => `${2022 - idx}`)} />
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <div className="flex h-full">
          <div className="border-l-2 flex-1">{children}</div>
          <Sidebar>sidebar is here</Sidebar>
        </div>
      </div>
    </main>
  )
}
