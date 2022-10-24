import { useRef, useEffect } from 'react'
import Text from '@src/components/Text'

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
        const asideWidth =
          containerRef.current.clientWidth -
          (e.clientX - containerRef.current.offsetLeft)
        const contentWidth = containerRef.current.clientWidth - asideWidth

        if (contentWidth - asideWidth > 0 && asideWidth > 100) {
          asideRef.current.style.width = `${asideWidth}px`
          contentRef.current.style.width = `${contentWidth}px`
        }
      }
    }
    const handleMouseUp = () => (canDrag.current = false)
    if (document) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [])

  return (
    <div className="h-full w-full relative" ref={containerRef}>
      <aside
        ref={asideRef}
        className="border-l-0 h-full w-[30%] absolute right-0 top-0 overflow-hidden pt-5"
      >
        <div className="w-[350px]">
          {/* sidebar contents */}
          <Text variant="large">Side bar is here</Text>
        </div>
      </aside>
      <aside
        ref={contentRef}
        className=" w-[70%] h-full absolute left-0 top-0 pt-5"
      >
        {/* page contents */}
        <div className="border-r-2 border-l-2 h-full">{children}</div>
        <button
          ref={dragBtnRef}
          onMouseDown={() => {
            canDrag.current = true
          }}
          className="absolute top-1/2 -right-3 -mt-3 h-6 w-6 bg-black z-40"
        />
      </aside>
    </div>
  )
}
