import { queryCharacters } from '@/resources/repositories/characters/rest/queryCharacters.ts'
import { CharactersRepository } from '@/resources/repositories/characters/types.ts'

export const useCharactersRepository: CharactersRepository = () => {
  return {
    queryCharacters,
  }
}
