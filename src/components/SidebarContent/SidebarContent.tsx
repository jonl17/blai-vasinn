import { useRouter } from 'next/router'
import { About, Artist } from '@src/components'
import Link from 'next/link'

type SidebarType = 'about' | 'artists' | 'tags'

// query param sidebar determines the content
// in the sidebar, defaults to about
export default function SideBarContent() {
  const { query } = useRouter()
  const type =
    typeof query.sidebar === 'string' && query.sidebar ? query.sidebar : 'about'

  const types: { [key in SidebarType]: () => JSX.Element } = {
    about: () => <About />,
    artists: () => <Artist />,
    tags: () => <p>tags</p>,
  }

  const Cmp = types[type as SidebarType]

  return (
    <>
      {!query.sidebar ||
        (query.sidebar !== 'about' && (
          <Link href="/">{'<- um bláa vasann'}</Link>
        ))}
      <Cmp />
    </>
  )
}
