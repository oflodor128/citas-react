import { useState, useEffect } from "react";

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl">Seguimineto de Paciente</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade P Clientes y {' '}
        <span className="text-orange-600 font-bold">Gestiona</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre P
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre del P"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion"
          />
        </div>

        <input
          type="submit"
          className="bg-orange-600 w-full p-3 text-white uppercase 
         font-bold hover:bg-orange-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
};

export default Formulario;
