import { About, Artist } from '@src/components'
import Link from 'next/link'
import { useSidebarContext } from '@src/context/sidebar'

type SidebarType = 'about' | 'artists' | 'tags'

export default function SideBarContent() {
  const { type, toggleSidebarType } = useSidebarContext()

  const types: { [key in SidebarType]: () => JSX.Element } = {
    about: () => <About />,
    artists: () => <Artist />,
    tags: () => <p>tags</p>,
  }

  const Cmp = types[type as SidebarType]

  return (
    <>
      {type !== 'about' && (
        <button onClick={() => toggleSidebarType('about')}>X</button>
      )}
      <Cmp />
    </>
  )
}
