import { TableProps } from '@src/types'
import Text from '../Text'
import cn from 'classnames'

const COLUMN_NAMES = ['ártal', 'heiti', 'uppruni', 'flokkur']

const Box = ({ label, className }: { label: string; className?: string }) => {
  return (
    <div
      className={cn(
        className,
        'border-b whitespace-nowrap overflow-hidden p-3'
      )}
    >
      <Text variant="small">{label}</Text>
    </div>
  )
}

type ColumnProps = {
  label: string
  items: string[]
  size?: 'small' | 'medium' | 'large'
}

const Column = ({ label, items, size = 'medium' }: ColumnProps) => (
  <div
    className={cn('border-r', {
      'col-span-1': size === 'small',
      'col-span-2': size === 'medium',
      'col-span-5': size === 'large',
    })}
  >
    <Box className="h-8 uppercase" label={label} />
    {items.map((data, key) => (
      <Box key={key} label={data} />
    ))}
  </div>
)

export default function Table({ data }: Pick<TableProps, 'data'>) {
  const years = data.map((d) =>
    new Date(d.date as string).getFullYear().toString()
  )
  const titles = data.map((d) => d.title)
  const origins = data.map((d) => d.origin.label)
  const categories = data.map((d) => d.category)
  return (
    <div className="w-[750px] border grid grid-cols-10">
      <Column size="small" label="Ártal" items={years} />
      <Column size="large" label="Heiti" items={titles} />
      <Column label="Uppruni" items={origins} />
      <Column label="Flokkur" items={categories} />
    </div>
  )
}
