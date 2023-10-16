import RickAndMortyLogo from '/logo.svg'
import classnames from 'classnames'

type Props = {
    className?: string
}

export const Logo = ({ className }: Props) => {
  const classes = classnames('pointer-events-none w-[80vw] min-w-[100px] max-w-[400px]', className)

  return (
    <img
      src={RickAndMortyLogo}
      alt="Logo de la serie Rick And Morty"
      className={classes}
    />
  )
}
