import classnames from 'classnames'
import { useState } from 'react'
import { InputSearchSelector } from '@/presentation/components/InputSearch/InputSearchSelector.tsx'
import { InputSearchTextInput } from '@/presentation/components/InputSearch/InputSearchTextInput.tsx'
import { CharacterGender, CharacterStatus } from '@/repositories/characters/types.ts'

type Props = {
    className?: string
}

export const InputSearch = ({ className }: Props) => {
  const [ value, setValue ] = useState('name')
  const classes = classnames('relative flex max-w-[400px] min-w-[100px] w-full', className)

  return (
    <div className={classes}>
      <InputSearchSelector
        name="filter"
        options={[
          { value: 'name', label: 'Nombre' },
          { value: 'status', label: 'Estado' },
          { value: 'species', label: 'Especies' },
          { value: 'type', label: 'Tipo' },
          { value: 'gender', label: 'Género' },
        ]}
        onChange={(value) => setValue(value)}
        selectClassName="rounded-r-none"
      />

      {(value === 'name' || value === 'species' || value === 'type') && (
        <InputSearchTextInput className="flex-1" inputClassName="rounded-l-none border-l-0"/>
      )}

      {value === 'status' && (
        <InputSearchSelector
          name="status"
          options={[
            { value: CharacterStatus.ALIVE, label: 'Vivo' },
            { value: CharacterStatus.DEAD, label: 'Muerto' },
            { value: CharacterStatus.UNKNOWN, label: 'Desconocido' },
          ]}
          className="flex-1"
          selectClassName="rounded-l-none border-l-0"
        />
      )}

      {value === 'gender' && (
        <InputSearchSelector
          name="gender"
          options={[
            { value: CharacterGender.FEMALE, label: 'Femenino' },
            { value: CharacterGender.MALE, label: 'Masculino' },
            { value: CharacterGender.GENDERLESS, label: 'Sin género' },
            { value: CharacterGender.UNKNOWN, label: 'Desconocido' },
          ]}
          className="flex-1"
          selectClassName="rounded-l-none border-l-0"
        />
      )}
    </div>
  )
}
