import { NavbarItemType } from '@src/types'
import React from 'react'
import NavbarItem from '@src/components/NavbarItem'
import { useSidebarContext } from '@src/context/sidebar'
import Link from 'next/link'

export default function Navbar() {
  const { toggleSidebarType } = useSidebarContext()

  const MOCK_MENU: Array<NavbarItemType> = [
    {
      label: 'Blái vasinn',
      type: 'link',
      url: '/',
      click: () => toggleSidebarType('about'),
    },
    {
      label: 'Listamenn',
      type: 'button',
      click: () => toggleSidebarType('artists'),
    },
    {
      label: 'Atriðisorð',
      type: 'button',
      click: () => toggleSidebarType('tags'),
    },
  ]
  return (
    <nav className="h-28 border-b-2">
      <div className="flex h-full items-end px-5">
        <div className="grid gap-4 grid-flow-col">
          {MOCK_MENU.map((item, key) => (
            <React.Fragment key={key}>
              <NavbarItem item={item} />
              {key !== MOCK_MENU.length - 1 && (
                <span className="h-full w-1 border-r-2" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="border-2 mb-3 ml-3 flex-1 rounded-lg h-10"></div>
        <Link href="/senda-inn">senda inn</Link>
      </div>
    </nav>
  )
}
