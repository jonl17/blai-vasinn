import Marquee from '@src/components/Marquee'
import { About, Navbar, ResizableTabs } from '@src/components'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(75)).map((_, idx) => `${2022 - idx}`)} />
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <ResizableTabs sidebarContent={<p>about shall go here</p>}>
          {children}
        </ResizableTabs>
      </div>
    </main>
  )
}
