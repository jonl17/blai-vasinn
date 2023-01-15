import Table from '@src/components/Table'
import TableHead from '@src/components/TableHead'
import { TableProps } from '@src/types'

type Props = {
  label: string
  tables: Array<TableProps>
}

export default function Tables({ label, tables }: Props) {
  return (
    <section className="max-w-3xl overflow-hidden ml-24">
      <p className="mb-16">{label}</p>
      <div className="grid gap-20">
        {tables.map((table, key) => (
          <div key={key}>
            <TableHead title={table.title} subtitle={table.subtitle} />
            <Table data={table.data} />
          </div>
        ))}
      </div>
    </section>
  )
}
