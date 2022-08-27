import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  // Fuera del return estan todas las funciones y logicas JavaScript que le daran vida a la pagina

  //pacientes: valor inicial del state
  //setPacientes: modificador del state
  const [pacientes, setPacientes] = useState([]);
  //Se pasa el prop de setPaciente al componente listadoPaciente
  const [paciente, setPaciente] = useState({});

  //Detecta que el localstorage no este vacio
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS();
  }, [])
//Guarda registros en local storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  //Es recomendable nombrar al prop como el valor que se le quiere dar, para evitar confuciones.
  //Ejemplo: toma1Valor={toma1Valor}
  const eliminarPaciente = id => {
    //.filter retorna un elemento del arreglo
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizados)
  }

  // Dentro del return esta todo lo que se mostrara en la pagina.
  //Se pueden colocar expresiones o condicionales unicamente mediante operadores ternarios

  return (
    <div className="container mx-auto mt-20">
      <Header

      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
