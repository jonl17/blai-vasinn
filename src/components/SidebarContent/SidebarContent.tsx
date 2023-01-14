import { About, Artists } from '@src/components'
import { useSidebarContext } from '@src/context/sidebar'
import { useMemo } from 'react'

type SidebarType = 'about' | 'artists' | 'tags'

export default function SideBarContent() {
  const { type, toggleSidebarType } = useSidebarContext()

  console.log('rerendering')

  const Cmp = useMemo(() => {
    const types: { [key in SidebarType]: () => JSX.Element } = {
      about: () => <About />,
      artists: () => <Artists />,
      tags: () => <p>tags</p>,
    }
    return types[type as SidebarType]
  }, [type])

  return (
    <>
      {type !== 'about' && (
        <button onClick={() => toggleSidebarType('about')}>X</button>
      )}
      <Cmp />
    </>
  )
}
