import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  // Fuera del return estan todas las funciones y logicas JavaScript que le daran vida a la pagina

  //pacientes: valor inicial del state
  //setPacientes: modificador del state
const [pacientes, setPacientes] = useState([]);
//Es recomendable nombrar al prop como el valor que se le quiere dar, para evitar confuciones.
//Ejemplo: toma1Valor={toma1Valor}



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
        />
        <ListadoPacientes 
        pacientes={pacientes}
        />
      </div>
    </div>
  )
}

export default App
