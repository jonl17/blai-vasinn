import { useState, useRef, useEffect } from 'react'
import Text from '../Text'

type Props = {
  children: React.ReactNode
}

export default function ResizableTabs({ children }: Props) {
  const canDrag = useRef(false)
  const asideRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragBtnRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        canDrag.current &&
        containerRef.current &&
        asideRef.current &&
        contentRef.current
      ) {
        const offsetRight =
          containerRef.current.clientWidth -
          (e.clientX - containerRef.current.offsetLeft)
        asideRef.current.style.width = `${offsetRight}px`
        const offsetLeft = containerRef.current.clientWidth - offsetRight
        contentRef.current.style.width = `${offsetLeft}px`
      }
    }
    if (document) {
      document.addEventListener('mousemove', handleMouseMove)
      return () => document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="h-full w-full relative" ref={containerRef}>
      <aside
        ref={asideRef}
        className="border-l-0 h-full w-[30%] absolute right-0 top-0 overflow-hidden"
      >
        <div className="w-[350px]">
          <Text variant="large">Side bar is here</Text>
        </div>
      </aside>
      <aside
        ref={contentRef}
        className="border-r-2 w-[70%] h-full absolute left-0 top-0"
      >
        <div>{children}</div>
        <button
          ref={dragBtnRef}
          onMouseDown={() => {
            canDrag.current = true
          }}
          onMouseUp={() => (canDrag.current = false)}
          onMouseLeave={() => (canDrag.current = false)}
          className="absolute top-1/2 -right-3  h-6 w-6 bg-black z-40"
        ></button>
      </aside>
    </div>
  )
}
