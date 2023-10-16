import BackgroundImage from '/background.webp'

export const Background = () => {
  return (
    <div className="pointer-events-none fixed top-[100px] z-[-10] flex w-full justify-center opacity-60">
      <img
        src={BackgroundImage}
        alt="Rick And Morty en el espacio"
        className="w-full min-w-[1200px] max-w-[1760px]"
      />
    </div>
  )
}
