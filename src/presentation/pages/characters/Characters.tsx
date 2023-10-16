import { useEffect, useRef } from 'react'
import { Background } from '@/presentation/components/Background.tsx'
import { Footer } from '@/presentation/components/Footer.tsx'
import { InputSearch } from '@/presentation/components/InputSearch/InputSearch.tsx'
import { Logo } from '@/presentation/components/Logo.tsx'
import { useCharacters } from '@/presentation/pages/characters/useCharacters.ts'

export const Characters = () => {
  const searchBarSection = useRef<HTMLDivElement>(null)
  const { characters, query, message } = useCharacters()

  useEffect(() => {
    query({ page: 1 })
  }, [])

  return (
    <main className="flex flex-col items-center gap-16 min-h-full">
      <section ref={searchBarSection} className="header-search-bar">
        <Logo className="mt-10"/>
        <InputSearch/>
      </section>

      <section
        className="fluid-container px-def-border flex-1 flex flex-wrap gap-5 justify-center min-h-[500px]"
        style={{
          marginTop: searchBarSection.current?.offsetHeight,
        }}
      >
        {characters?.items.map((character) => (
          <div key={character.id} className="p-3 w-[250px] min-h-[300px] bg-surface backdrop-blur-sm border-2 border-gray-300 rounded-xl">
            <article>
              <div className="flex gap-4 items-center">
                <img src={character.image} alt={character.name} className="w-[60px] w-[60px] object-cover rounded-full"/>
                <h3 className="font-semibold text-[1.1rem]">{character.name}</h3>
              </div>
            </article>
          </div>
        ))}

        <Footer/>
      </section>

      <Background/>
    </main>
  )
}
