import { IconZoomFilled } from '@tabler/icons-react'
import classnames from 'classnames'
import { useEffect } from 'react'

type Props = {
  className?: string,
  inputClassName?: string,
  onChange?: (value: string) => void,
}

export const InputSearchTextInput = ({ className, inputClassName, onChange }: Props) => {
  const classes = classnames('relative flex min-h-[34px] min-w-[100px]', className)

  useEffect(() => {
    onChange?.('')
  }, [])

  return (
    <div className={classes}>
      <input
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          w-full rounded-full border
          border-b-gray-300 bg-transparent py-1
          pl-4 pr-11 font-light text-white
          caret-gray-50 outline-0 backdrop-blur-md
          transition-all duration-200 ${inputClassName}
      `}/>

      <IconZoomFilled className="absolute right-4 top-2 h-[1.1rem] text-gray-300"/>
    </div>
  )
}
