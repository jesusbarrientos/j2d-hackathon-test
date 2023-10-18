import classnames from 'classnames'
import { useState } from 'react'
import { InputSearchSelector } from '@/presentation/components/InputSearch/InputSearchSelector.tsx'
import { InputSearchTextInput } from '@/presentation/components/InputSearch/InputSearchTextInput.tsx'
import {
  CharacterGender,
  CharacterStatus,
  FilterableCharacterProperties,
} from '@/resources/repositories/characters/types.ts'

export type InputSearchProps = {
  className?: string,
  onChange?: (value: { filter: FilterableCharacterProperties, value: string }) => void,
}

export const InputSearch = ({ className, onChange }: InputSearchProps) => {
  const [ filter, setFilter ] = useState<FilterableCharacterProperties>('name')
  const classes = classnames('relative flex w-full min-w-[100px] max-w-[400px]', className)

  const onChangeHandler = (value: string) => {
    onChange?.({
      filter,
      value,
    })
  }

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
        onChange={(value) => setFilter(value as FilterableCharacterProperties)}
        selectClassName="rounded-r-none"
      />

      {(filter === 'name' || filter === 'species' || filter === 'type') && (
        <InputSearchTextInput
          className="flex-1"
          inputClassName="rounded-l-none border-l-0"
          onChange={onChangeHandler}
        />
      )}

      {filter === 'status' && (
        <InputSearchSelector
          name="status"
          options={[
            { value: CharacterStatus.ALIVE, label: 'Vivo' },
            { value: CharacterStatus.DEAD, label: 'Muerto' },
            { value: CharacterStatus.UNKNOWN, label: 'Desconocido' },
          ]}
          className="flex-1"
          selectClassName="rounded-l-none border-l-0"
          onChange={onChangeHandler}
        />
      )}

      {filter === 'gender' && (
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
          onChange={onChangeHandler}
        />
      )}
    </div>
  )
}
