import React from 'react'
import Text from '../Text'

type Props = {}

const MOCK_MENU = [
  { label: 'Blái vasinn', url: '/' },
  { label: 'Listamenn', url: null },
  { label: 'Atriðisorð', url: null },
]

export default function Navbar() {
  return (
    <nav className="h-28 border-b-2">
      <div className="flex h-full items-end px-5">
        <div className="grid gap-4 grid-flow-col">
          {MOCK_MENU.map((item, key) => (
            <React.Fragment key={key}>
              <Text className=" hover:text-blue" variant="dynamicLarge">
                {item.label}
              </Text>
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
