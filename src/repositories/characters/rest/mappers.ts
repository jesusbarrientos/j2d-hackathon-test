import { CharacterRestSchema } from '@/repositories/characters/rest/types.ts'
import { CharacterGender, CharacterStatus } from '@/repositories/characters/types.ts'

export const mapCharacterStatus = (value: CharacterRestSchema['status']): CharacterStatus => {
  switch (value) {
    case 'Alive':
      return CharacterStatus.ALIVE
    case 'Dead':
      return CharacterStatus.DEAD
    case 'unknown':
      return CharacterStatus.UNKNOWN
    default:
      return CharacterStatus.UNKNOWN
  }
}

export const mapCharacterGender = (value: CharacterRestSchema['gender']): CharacterGender => {
  switch (value) {
    case 'Female':
      return CharacterGender.FEMALE
    case 'Male':
      return CharacterGender.MALE
    case 'Genderless':
      return CharacterGender.GENDERLESS
    case 'unknown':
      return CharacterGender.UNKNOWN
    default:
      return CharacterGender.UNKNOWN
  }
}
