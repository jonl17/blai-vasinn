type Props = {
  children: React.ReactNode
}

export default function SimpleLayout({ children }: Props) {
  return <div className="min-h-screen w-full">{children}</div>
}
