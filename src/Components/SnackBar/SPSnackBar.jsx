
const SPSnackBar = ({ text, isVisible, isError = false }) => {
  return (
    <section
      className={`absolute text-white ${isVisible ? 'top-20' : 'invisible top-0'} left-4 border-black bg-blue-500 py-2 px-4 text-lg font tranistion duration-300 ease-out `}
    >
      {text}
    </section>
  )
}

export default SPSnackBar
