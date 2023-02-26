import { NavbarItemType } from '@src/types'
import Text from '@src/components/Text'
import Link from 'next/link'

type Props = {
  item: NavbarItemType
}

export default function NavbarItem({ item }: Props) {
  if (item.type === 'button') {
    return (
      <button className="mb-3" onClick={item.click}>
        <Text className=" hover:text-blue" variant="dynamicLarge">
          {item.label}
        </Text>
      </button>
    )
  }

  return (
    <Link href={item.url} onClick={item.click}>
      <Text className=" hover:text-blue" variant="dynamicLarge">
        {item.label}
      </Text>
    </Link>
  )
}
