import Link from 'next/link'
import React from 'react'
import { DUMMY_MENU } from '~/dummy'
import { IMenuItem } from '~/types'

interface INavbar {
  items: Array<IMenuItem>
}

const Navbar = ({ items = DUMMY_MENU }: INavbar) => {
  return (
    <nav className="bg-black text-white w-full">
      <ul className="flex justify-between h-24 max-w-lg mx-auto px-4">
        {items.map((item, idx) => (
          <Link key={idx} passHref href={`/${item.slug}`}>
            <a className="flex place-items-center">
              <li>
                <p className="underline">{item.label}</p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
