import Marquee from '@src/components/Marquee'
import { SanityType_about } from '@src/sanity-types'
import { About, Navbar, ResizableTabs } from '@src/components'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
  about: SanityType_about
}

export default function PageLayout({ children, about }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(75)).map((_, idx) => `${2022 - idx}`)} />
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <ResizableTabs sidebarContent={<About about={about} />}>
          {children}
        </ResizableTabs>
      </div>
    </main>
  )
}
