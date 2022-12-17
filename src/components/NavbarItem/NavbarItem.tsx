import { NavbarItemType } from '@src/types'
import Text from '@src/components/Text'
import Link from 'next/link'
import { useRouter } from 'next/router'
import qs from 'query-string'

type Props = {
  item: NavbarItemType
}

export default function NavbarItem({ item }: Props) {
  if (item.type === 'button') {
    return (
      <button onClick={item.click}>
        <Text className=" hover:text-blue" variant="dynamicLarge">
          {item.label}
        </Text>
      </button>
    )
  }

  return (
    <Link href={item.url}>
      <Text className=" hover:text-blue" variant="dynamicLarge">
        {item.label}
      </Text>
    </Link>
  )
}
