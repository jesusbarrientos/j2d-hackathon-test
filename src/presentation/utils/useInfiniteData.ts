import { useMemo, useState } from 'react'
import { PagesCache } from '@/presentation/utils/types.ts'
import { PaginatedData } from '@/resources/repositories/common/types.ts'

export const useInfiniteData = () => {
  const [ pages, setPages ] = useState<PagesCache>({})

  const addPage = (data: PaginatedData<any>) => {
    setPages((pages) => ({ ...pages, [data.page as number]: data }))
  }

  const clear = () => {
    setPages({})
  }

  const items = useMemo(() => Object.values(pages).reduce((acc, page) => {
    return [ ...acc, ...page.items ]
  }, [] as any[]), [ pages ])

  return {
    pages,
    addPage,
    clear,
    items,
  }
}
