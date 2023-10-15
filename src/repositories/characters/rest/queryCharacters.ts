import { mapCharacterGender, mapCharacterStatus } from '@/repositories/characters/rest/mappers.ts'
import { CharacterRestSchema, QueryCharactersRestResponse } from '@/repositories/characters/rest/types.ts'
import { Character, QueryCharacters, QueryCharactersOutput } from '@/repositories/characters/types.ts'
import { emptyPaginatedData } from '@/repositories/common/emptyPaginatedData.ts'
import { catchResponse } from '@/repositories/common/rest/catchResponse.ts'
import { client } from '@/repositories/common/rest/client.ts'
import { mapPaginatedData } from '@/repositories/common/rest/mapPaginatedData.ts'
import { PaginatedData } from '@/repositories/common/types.ts'

export const queryCharacters: QueryCharacters = async (params) => {
  const { data, error } = await catchResponse<QueryCharactersRestResponse>(
    async () => client.get('/character', { params }),
  )
  
  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return emptyPaginatedData as QueryCharactersOutput
  }

  const mappedData = mapPaginatedData(data, params.page) as PaginatedData<CharacterRestSchema>

  return {
    ...mappedData,
    items: mappedData.items.map((character) => ({
      ...character,
      status : mapCharacterStatus(character.status),
      gender : mapCharacterGender(character.gender),
    })) as Character[],
  }
}
