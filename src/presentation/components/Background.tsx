import BackgroundImage from '/background.webp'

export const Background = () => {
  return (
    <div className="fixed top-[100px] z-[-10] opacity-60 pointer-events-none">
      <img
        src={BackgroundImage}
        alt="Rick And Morty en el espacio"
        className="w-full min-w-[1200px] max-w-[1760px]"
      />
    </div>
  )
}
