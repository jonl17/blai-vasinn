import create from 'zustand'

interface Props {
  contentTabWidth: number
  updateContentTabWidth: (n: number) => void
  sidebarTabWidth: number
  updateSidebarTabWidth: (n: number) => void
}

const initalContentTabWidth = 880

export const useResizableTabs = create<Props>((set) => ({
  contentTabWidth: 0,
  sidebarTabWidth: 0,
  updateContentTabWidth: (contentTabWidth) =>
    set({
      contentTabWidth,
    }),
  updateSidebarTabWidth: (sidebarTabWidth) =>
    set({
      sidebarTabWidth,
    }),
}))

export const useSizeRatio = () =>
  useResizableTabs((store) => store.contentTabWidth / initalContentTabWidth)
