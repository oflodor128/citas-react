
//Viene setPaciente del componente setPaciente
const Paciente = ({paciente, setPaciente}) => {



    const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className="mx-5 my-10m-3 bg-white shadow-md py-10 px-5 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{' '}
        <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:{' '}
        <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha:{' '}
        <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{' '}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between mt-10">
        <button type="button"
        className="py-2 px-10 bg-indigo-600
         hover:bg-indigo-400 transition-colors
          text-white font-bold uppercase rounded"
          onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button type="button"
        className="py-2 px-10 bg-red-600
        hover:bg-red-600 transition-colors
        text-white uppercase rounded"
        >Eliminar</button>
    </div>

    
</div>
  );
};
export default Paciente;