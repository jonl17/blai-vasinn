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
        <div className="w-[350px] p-5">
          {/* sidebar contents */}
          <Text variant="small">Side bar is here</Text>
          <Text variant="small">Side bar is here</Text>
          <Text variant="small">Side bar is here</Text>
          <Text variant="small">Side bar is here</Text>
          <Text variant="small">Side bar is here</Text>
          <Text variant="small">Side bar is here</Text>
        </div>
      </aside>
      <aside
        ref={contentRef}
        className=" w-[70%] h-full absolute left-0 top-0 pt-5"
      >
        {/* page contents */}
        <div className="border-r-2 border-l-2 h-full p-5">{children}</div>
        <button
          ref={dragBtnRef}
          onMouseDown={() => {
            canDrag.current = true
          }}
          className="absolute top-1/2 -right-[11px] -mt-3 h-6 w-6 z-40 flex justify-between py-[1.5px] px-[1px]"
        >
          {Array.from(Array(5)).map((_, key) => (
            <span className="h-full w-[2px] border-r-2" key={key} />
          ))}
        </button>
      </aside>
    </div>
  )
}
