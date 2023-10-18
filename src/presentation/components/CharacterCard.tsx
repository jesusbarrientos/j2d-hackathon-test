import { IconCurrentLocation } from '@tabler/icons-react'
import { Character } from '@/resources/repositories/characters/types.ts'

type Props = {
    character: Character
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <article className={`
      flex min-h-[300px] w-[250px] flex-col
      items-center gap-4 overflow-auto rounded-xl 
      border-2 border-gray-300 bg-surface px-3 py-4
      backdrop-blur-sm
    `}>
      <img src={character.image} alt={character.name} className="w-[60px] rounded-full object-cover"/>
      <h3 className="text-center text-[1.1rem] font-semibold">{character.name}</h3>

      <p className="text-center text-sm text-gray-200">
        {character.species} - {character.gender}<br/>
        <span className="text-accent">{character.status}</span><br/><br/>
        <IconCurrentLocation className="inline h-[1rem]"/> {character.location.name}
      </p>
    </article>
  )
}
