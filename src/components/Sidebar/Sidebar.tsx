import { useState, useRef, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  const [canDrag, setCanDrag] = useState(false)
  const asideRef = useRef<HTMLElement | null>(null)
  const [width, setWidth] = useState<number>()
  const [initWidth, setInitWidth] = useState<number>()

  useEffect(() => {
    const asideCurrent = asideRef.current
    if (asideCurrent) {
      setInitWidth(asideCurrent.clientWidth)
    }
  }, [])

  const handleDrag = (clientX: number) => {
    const aside = asideRef.current
    if (canDrag && aside) {
      const offsetRight = aside.clientWidth - (clientX - aside.offsetLeft)
      right.style.width = offsetRight + 'px'
    }
  }

  return (
    <aside
      ref={asideRef}
      className="border-l-2 flex-grow relative"
      style={{ width }}
    >
      <button
        onMouseDown={() => setCanDrag(true)}
        onMouseUp={() => setCanDrag(false)}
        onMouseLeave={() => setCanDrag(false)}
        onMouseMove={(e) => handleDrag(e.clientX)}
        className="absolute -left-3 top-1/2 h-6 w-6 bg-black"
      ></button>
      {children}
    </aside>
  )
}
