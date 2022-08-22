function Header() {
//Para poder pasar  y leer los datos en el componente se debe pasar como  parametro.

//Es posible usar destructuring para pasar valores de variables.
    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento PR {" "}
            <span className="text-orange-600">Clientes</span>
        </h1>
    )
};

export default Header;