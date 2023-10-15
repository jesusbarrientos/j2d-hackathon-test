import { useEffect } from 'react'
import { useCharacters } from '@/presentation/pages/characters/useCharacters.ts'

export const Characters = () => {
  const { characters, query, message } = useCharacters()

  useEffect(() => {
    query({ page: 1 })
  }, [])

  return (
    <div>
      <h1>Characters</h1>
    </div>
  )
}
