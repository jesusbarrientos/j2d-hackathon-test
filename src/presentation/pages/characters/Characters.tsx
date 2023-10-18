import { useEffect, useState } from 'react'
import { CharacterCard } from '@/presentation/components/CharacterCard.tsx'
import { Footer } from '@/presentation/components/Footer.tsx'
import { InputSearch } from '@/presentation/components/InputSearch/InputSearch.tsx'
import { Logo } from '@/presentation/components/Logo.tsx'
import { useCharacters } from '@/presentation/pages/characters/useCharacters.ts'
import { useSearch } from '@/presentation/utils/useSearch.ts'
import { FilterableCharacterProperties } from '@/resources/repositories/characters/types.ts'

export const Characters = () => {
  const { characters, query, isLoading, totalPages, nextPage } = useCharacters()
  const [ filter, setFilter ] = useState<{ filter: FilterableCharacterProperties, value: string}>({ filter: 'name', value: '' })
  const sendQuery = useSearch(query)

  // ejecutar búsqueda cuando se cambie el filtro
  useEffect(() => {
    sendQuery({
      [filter.filter] : filter.value,
      page            : 1,
    })
  }, [ filter ])

  // ejecutar búsqueda cuando se cambie la página
  useEffect(() => {
    const handleScroll =() => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = window.document.documentElement

      if (!isLoading && (scrollTop + clientHeight) >= (scrollHeight - 5) && nextPage <= totalPages) {
        query({
          [filter.filter] : filter.value,
          page            : nextPage,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ characters, filter ])

  return (
    <main className="flex min-h-full flex-col items-center gap-16">
      <section className={`
          fluid-container px-def-border
          fixed top-0 z-50 flex w-full 
          flex-col items-center justify-center gap-8 
          bg-gradient-to-b from-black from-70% to-transparent pb-20
      `}>
        <Logo className="mt-10"/>
        <InputSearch onChange={setFilter}/>
      </section>

      <section className={`
          fluid-container px-def-border mt-[300px] flex
          min-h-[350px] flex-1 flex-wrap items-start justify-center
          gap-5
      `}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </section>

      {isLoading && (
        <span className="font-semibold">Cargando...</span>
      )}

      <Footer/>
    </main>
  )
}
