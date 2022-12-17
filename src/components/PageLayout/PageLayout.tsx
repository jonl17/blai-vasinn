import Marquee from '@src/components/Marquee'
import { About, Navbar, ResizableTabs } from '@src/components'
import { useRouter } from 'next/router'
import { SiteSettingsDocument } from '@prismic-types'
import { RTNode } from '@prismicio/types'

type Props = {
  children: React.ReactNode
  siteSettings: SiteSettingsDocument
}

export default function PageLayout({ children, siteSettings }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(75)).map((_, idx) => `${2022 - idx}`)} />
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <ResizableTabs>{children}</ResizableTabs>
      </div>
    </main>
  )
}
