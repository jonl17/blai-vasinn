import Marquee from '@src/components/Marquee'

type Props = {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <main className="bg-white text-black flex">
      <Marquee items={Array.from(Array(50)).map((_, idx) => `${2022 - idx}`)} />
      <div>{children}</div>
    </main>
  )
}
