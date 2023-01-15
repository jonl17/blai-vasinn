import { TableProps } from '@src/types'
import Text from '../Text'

export default function TableHead({
  title,
  subtitle,
}: Pick<TableProps, 'title' | 'subtitle'>) {
  return (
    <div className="flex gap-5 items-end mb-5">
      <Text as="h2" className="mb-0" variant="dynamicLarge">
        {title}
      </Text>
      <Text variant="small">{subtitle}</Text>
    </div>
  )
}
