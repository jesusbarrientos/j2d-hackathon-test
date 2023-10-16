import { IconChevronDown } from '@tabler/icons-react'
import classnames from 'classnames'

type Props = {
    className?: string,
    selectClassName?: string,
    name: string,
    options: { value: any, label: string }[],
    onChange?: (value: string) => void
}

export const InputSearchSelector = ({ className, selectClassName, name, options, onChange }: Props) => {
  const classes = classnames('relative flex min-w-[100px]', className)

  return (
    <div className={classes}>
      <div className="relative w-full">
        <select
          name={name}
          onChange={(e) => onChange?.(e.target.value)}
          className={`
            text-white font-light bg-transparent backdrop-blur-md min-h-[34px]
            py-1 pl-4 pr-8 w-full
            border border-b-gray-300 rounded-full outline-0 ${selectClassName}
        `}
          style={{
            WebkitAppearance: 'none',
          }}
        >
          {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>

        <IconChevronDown className="absolute h-[1.1rem] top-2 right-1 text-gray-300"/>
      </div>
    </div>
  )
}
