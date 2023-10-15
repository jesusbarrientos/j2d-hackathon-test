import { useState } from 'react'
import { UiStateStatus, useUiStatus } from '@/presentation/utils/useUiStatus.ts'
import { Character, QueryCharactersInput } from '@/repositories/characters/types.ts'
import { useCharactersRepository } from '@/repositories/characters/useCharactersRepository.ts'
import { emptyPaginatedData } from '@/repositories/common/emptyPaginatedData.ts'
import { PaginatedData } from '@/repositories/common/types.ts'

export const useCharacters = () => {
  const { queryCharacters } = useCharactersRepository()
  const status = useUiStatus()
  const [ items, setItems ] = useState<PaginatedData<Character>>()

  const query = async (params: QueryCharactersInput) => {
    status.resetStatus()

    try {
      status.setStatus(UiStateStatus.LOADING)
      status.setMessage('Obteniendo personajes')

      const itemsResult = await queryCharacters(params)
      status.setStatus(UiStateStatus.SUCCESS)
      status.setMessage('Personajes cargados correctamente')
      setItems(itemsResult)
      return itemsResult
    }
    catch (error) {
      status.setStatus(UiStateStatus.ERROR)
      status.setMessage('Error al cargar los personajes')
      setItems(emptyPaginatedData as PaginatedData<Character>)
    }
  }

  return {
    message    : status.message,
    isLoading  : status.isLoading,
    isSuccess  : status.isSuccess,
    isError    : status.isError,
    characters : items,
    query,
  }
}
