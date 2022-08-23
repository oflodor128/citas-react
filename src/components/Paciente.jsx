const Paciente = ({paciente}) => {
    const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className="mx-5 my-10m-3 bg-white shadow-md py-10 px-5 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{' '}
        <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:{' '}
        <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha:{' '}
        <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{' '}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>

    
</div>
  );
};
export default Paciente;