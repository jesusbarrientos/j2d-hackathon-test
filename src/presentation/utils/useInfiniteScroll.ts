import { useCallback, useEffect } from 'react'

export const useInfiniteScroll = (callback: VoidFunction) => {
  const handleScroll = useCallback(() => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
    } = window.document.documentElement

    if ((scrollTop + clientHeight) >= (scrollHeight - 5)) {
      callback()
    }
  }, [ callback ])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ handleScroll ])
}
