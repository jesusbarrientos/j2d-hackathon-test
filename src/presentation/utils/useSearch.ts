import { useCallback, useState } from 'react'

export const useSearch = (searchCallback: (value: any) => void) => {
  const [ lastSearchTimeout, setLastSearchTimeout ] = useState<number>()

  return useCallback((value: any) => {
    if (lastSearchTimeout) {
      clearTimeout(lastSearchTimeout)
    }

    const timeout = setTimeout(() => {
      searchCallback?.(value)
    }, 500)

    setLastSearchTimeout(timeout)
  }, [ searchCallback, lastSearchTimeout ])
}
