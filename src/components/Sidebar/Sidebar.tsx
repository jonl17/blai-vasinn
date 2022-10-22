type Props = {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  return <aside className="border-l-2 flex-1">{children}</aside>
}
