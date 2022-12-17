import { NavbarItemType } from '@src/types'
import { useRouter } from 'next/router'
import React from 'react'
import NavbarItem from '@src/components/NavbarItem'

export default function Navbar() {
  const { push } = useRouter()

  const MOCK_MENU: Array<NavbarItemType> = [
    { label: 'Blái vasinn', type: 'link', url: '/' },
    {
      label: 'Listamenn',
      type: 'button',
      click: () => push({ query: { sidebar: 'artists' } }),
    },
    {
      label: 'Atriðisorð',
      type: 'button',
      click: () => push({ query: { sidebar: 'tags' } }),
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
      </div>
    </nav>
  )
}
