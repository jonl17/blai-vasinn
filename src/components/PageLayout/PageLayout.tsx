import { SiteSettingsDocument } from '@prismic-types'
import { Navbar, ResizableTabs } from '@src/components'
import Marquee from '@src/components/Marquee'

type Props = {
  children: React.ReactNode
  siteSettings: SiteSettingsDocument
}

export default function PageLayout({ children }: Props) {
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
