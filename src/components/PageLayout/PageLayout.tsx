import Marquee from '@src/components/Marquee'
import Navbar from '../Navbar'
import ResizableTabs from '../ResizableTabs'

type Props = {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(50)).map((_, idx) => `${2022 - idx}`)} />
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <ResizableTabs>{children}</ResizableTabs>
      </div>
    </main>
  )
}
