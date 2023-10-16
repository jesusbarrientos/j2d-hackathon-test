import { IconZoomFilled } from '@tabler/icons-react'
import classnames from 'classnames'

type Props = {
    className?: string,
    inputClassName?: string,
}

export const InputSearchTextInput = ({ className, inputClassName }: Props) => {
  const classes = classnames('relative flex min-w-[100px] min-h-[34px]', className)

  return (
    <div className={classes}>
      <input className={`
          input-search-icon
          w-full bg-transparent backdrop-blur-md
          py-1 pl-4 pr-11
          border border-b-gray-300 rounded-full outline-0
          caret-gray-50 text-white font-light
          transition-all duration-200 ${inputClassName}
      `}/>

      <IconZoomFilled className="absolute h-[1.1rem] top-2 right-4 text-gray-300"/>
    </div>
  )
}
