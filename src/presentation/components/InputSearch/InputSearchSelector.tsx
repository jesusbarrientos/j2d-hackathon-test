import { IconChevronDown } from '@tabler/icons-react'
import classnames from 'classnames'
import { useEffect } from 'react'

type Props = {
  className?: string,
  selectClassName?: string,
  name: string,
  options: { value: any, label: string }[],
  onChange?: (value: string) => void,
}

export const InputSearchSelector = ({ className, selectClassName, name, options, onChange }: Props) => {
  const classes = classnames('relative flex min-w-[100px]', className)

  useEffect(() => {
    onChange?.(options[0].value)
  }, [])

  return (
    <div className={classes}>
      <div className="relative w-full">
        <select
          name={name}
          onChange={(e) => onChange?.(e.target.value)}
          className={`
            min-h-[34px] w-full rounded-full border border-b-gray-300
            bg-transparent py-1 pl-4 pr-8
            font-light text-white outline-0 backdrop-blur-md ${selectClassName}
          `}
          style={{
            WebkitAppearance: 'none',
          }}
        >
          {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>

        <IconChevronDown className="absolute right-1 top-2 h-[1.1rem] text-gray-300"/>
      </div>
    </div>
  )
}
