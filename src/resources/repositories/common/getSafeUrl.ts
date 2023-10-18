import config from '@/config.ts'

export const getSafeUrl = (path: string) => {
  const urlObject = new URL(path, config.apiUrl)
  return urlObject.pathname
}
