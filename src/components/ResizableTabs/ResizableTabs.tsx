import { useResizableTabs } from '@src/store/resizable-tabs'
import { useRef, useEffect } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  sidebarContent: React.ReactNode
}

export default function ResizableTabs({ children, sidebarContent }: Props) {
  const canDrag = useRef(false)
  const asideRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragBtnRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const { updateContentTabWidth } = useResizableTabs()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        canDrag.current &&
        containerRef.current &&
        asideRef.current &&
        contentRef.current
      ) {
        const container = containerRef.current
        const leftTab = contentRef.current
        const rightTab = asideRef.current

        const rightTabWidth =
          container.clientWidth - (e.clientX - container.offsetLeft)
        const leftTabWidth = container.clientWidth - rightTabWidth
        const containerWidth = container.clientWidth

        if (leftTabWidth - rightTabWidth > 0 && rightTabWidth > 25) {
          rightTab.style.width = `${(rightTabWidth / containerWidth) * 100}%`
          leftTab.style.width = `${(leftTabWidth / containerWidth) * 100}%`
          updateContentTabWidth(leftTabWidth)
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
        className="border-l-0 h-full w-1/4 absolute right-0 top-0 overflow-hidden"
      >
        <div className="w-[550px] p-5">
          {/* sidebar contents */}
          {sidebarContent}
        </div>
      </aside>

      <aside
        id="resizable-window-content"
        ref={contentRef}
        className="h-full absolute left-0 top-0 w-3/4"
      >
        {/* page contents */}
        <div className="h-full py-5 overflow-y-scroll scrollbar-hide">
          <span className="absolute left-0 bottom-0 h-[97%] border-l-2" />
          {children}
          <span className="absolute -right-[0.5px] bottom-0 h-[97%] border-l-2" />
        </div>
        <button
          ref={dragBtnRef}
          onMouseDown={() => {
            canDrag.current = true
          }}
          className="absolute top-1/2 -right-[11px] -mt-3 h-6 w-6 z-40 flex justify-between py-[1.5px] px-[1px]"
        >
          {Array.from(Array(5)).map((_, key) => (
            // the middle line sometimes, on some
            // browser doesn't go straight on the line
            // so we just hide it.
            <span
              className={cn('h-full w-[2px] border-r-2', {
                'opacity-0': key === 2,
              })}
              key={key}
            />
          ))}
        </button>
      </aside>
    </div>
  )
}
