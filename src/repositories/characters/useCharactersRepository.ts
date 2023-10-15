import { queryCharacters } from '@/repositories/characters/rest/queryCharacters.ts'
import { CharactersRepository } from '@/repositories/characters/types.ts'

export const useCharactersRepository: CharactersRepository = () => {
  return {
    queryCharacters,
  }
}
