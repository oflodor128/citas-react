import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //pacientes es el registro original que se agreaga a paciente
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //Solo se activa cuando el estado de paciente cambia
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])




  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio');

      setError(true);
      return;
    }

    setError(false);


    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

      //Edita el registro
    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      
      setPacientes(pacientesActualizados);
      setPaciente({});

    }else{
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl">Seguimineto de Paciente</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Agrega  Registros y {' '}
        <span className="text-orange-600 font-bold">Gestiona</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {error &&
          <Error>
            <p>Todos los campos son obligados!!</p>
          </Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre P
          </label>


          <input
            id="mascota"
            type="text"
            placeholder="Nombre del P"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            //Esto es un callback, da acceso a un evento
            //onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Cliente
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            E Mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Fehca
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-orange-600 w-full p-3 text-white uppercase 
         font-bold hover:bg-orange-700 cursor-pointer transition-colors"
          value={paciente.id ? 'Editar Registro' : 'Agregar Registro'}
        />
      </form>
    </div>
  )
};

export default Formulario;
