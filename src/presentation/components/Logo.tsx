import RickAndMortyLogo from '/logo.svg'
import classnames from 'classnames'

type Props = {
    className?: string
}

export const Logo = ({ className }: Props) => {
  const classes = classnames('max-w-[400px] min-w-[100px] w-[80vw] pointer-events-none', className)

  return (
    <img
      src={RickAndMortyLogo}
      alt="Logo de la serie Rick And Morty"
      className={classes}
    />
  )
}
