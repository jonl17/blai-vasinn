import { createContext, useContext, useState } from 'react'

type SidebarType = 'about' | 'artists' | 'tags'

interface SidebarContext {
  type: SidebarType
  toggleSidebarType: (type: SidebarType) => void
}

const SidebarContext = createContext<SidebarContext>({
  type: 'about',
  toggleSidebarType: () => {},
})

type Props = {
  children: React.ReactElement
}

export const SidebarProvider = ({ children }: Props) => {
  const [type, setType] = useState<SidebarType>('about')
  const toggleSidebarType = (type: SidebarType) => setType(type)

  return (
    <SidebarContext.Provider value={{ type, toggleSidebarType }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)
