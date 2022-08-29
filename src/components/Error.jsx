
//children es una palabra reservada en REACT hace referencia a todo lo que se le pasa a un componente.
const Error = ({children}) => {
  return (
    <div className="bg-red-600 font-bold text-center text-white rounded p-2">
        {children}
        </div>
  )
}

export default Error
