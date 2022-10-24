type Props = {
  items: string[]
}

export default function Marquee({ items }: Props) {
  return (
    <aside className="h-screen w-28 place-items-center overflow-y-hidden relative">
      <div className="grid place-items-center animate-marquee">
        {items.map((item, key) => (
          <p
            className="px-2 text-small hover:text-blue leading-[1.1]"
            key={key}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="grid place-items-center animate-marquee2 absolute top-0 left-0 w-full">
        {items.map((item, key) => (
          <p
            className="px-2 text-small hover:text-blue leading-[1.1]"
            key={key}
          >
            {item}
          </p>
        ))}
      </div>
    </aside>
  )
}
