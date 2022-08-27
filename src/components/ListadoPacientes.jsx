import Paciente from "./Paciente";
//Viene setPaciente desde App.jsx, se lee y se pasa al comoponente Paciente
const ListadoPacientes = ({ pacientes, setPaciente }) => {


    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Gestiona {''}
                        <span className="text-orange-600 font-bold">P's y citas</span>
                    </p>
                    {pacientes.map(paciente => (
                        //Esta parte renderisa los pacientes que se van agregando.
                        //Warning: Each child in a list should have a unique "key" prop.
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No tenemos pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Agrega!! {''}
                        <span className="text-orange-600 font-bold">Rapido:</span>
                    </p>
                </>
            )}
        </div>
    )
};

export default ListadoPacientes;