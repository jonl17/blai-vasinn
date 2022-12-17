import { NavbarItemType } from '@src/types'
import Text from '@src/components/Text'
import Link from 'next/link'
import { useRouter } from 'next/router'
import qs from 'query-string'

type Props = {
  item: NavbarItemType
}

export default function NavbarItem({ item }: Props) {
  const router = useRouter()

  if (item.type === 'button') {
    return (
      <button onClick={item.click}>
        <Text className=" hover:text-blue" variant="dynamicLarge">
          {item.label}
        </Text>
      </button>
    )
  }

  const query = qs.stringify(router.query)
  const href = query ? `${item.url}?${query}` : item.url

  return (
    <Link href={href}>
      <Text className=" hover:text-blue" variant="dynamicLarge">
        {item.label}
      </Text>
    </Link>
  )
}
