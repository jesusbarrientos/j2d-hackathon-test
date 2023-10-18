import { useState } from 'react'
import { useInfiniteData } from '@/presentation/utils/useInfiniteData.ts'
import { UiStateStatus, useUiStatus } from '@/presentation/utils/useUiStatus.ts'
import { Character, QueryCharactersInput } from '@/resources/repositories/characters/types.ts'
import { useCharactersRepository } from '@/resources/repositories/characters/useCharactersRepository.ts'
import { emptyPaginatedData } from '@/resources/repositories/common/emptyPaginatedData.ts'
import { PaginatedData } from '@/resources/repositories/common/types.ts'

export const useCharacters = () => {
  const { queryCharacters } = useCharactersRepository()
  const status = useUiStatus()
  const { items: allItems, addPage, clear } = useInfiniteData()
  const [ items, setItems ] = useState<PaginatedData<Character>>()

  const query = async (params: QueryCharactersInput) => {
    status.resetStatus()

    if (params.page === 1) {
      clear()
    }

    try {
      status.setStatus(UiStateStatus.LOADING)
      status.setMessage('Obteniendo personajes')

      const itemsResult = await queryCharacters(params)
      status.setStatus(UiStateStatus.SUCCESS)
      status.setMessage('Personajes cargados correctamente')
      setItems(itemsResult)
      addPage(itemsResult)
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
    characters : allItems,
    page       : items?.page || 1,
    nextPage   : items?.page ? items.page + 1 : 1,
    totalPages : items?.totalPages || 0,
    query,
  }
}
