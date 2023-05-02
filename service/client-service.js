

console.log("CLIENT - SERVICE");

// Funcion que permite ejecutar promesas que a su vez, ejecutaran peticiones al servidor
const listaClientes = () => {

    // Uso de la funcion FETCH API la cual, de igual manera, retorna una Promise. Fetch establece una conexion con la URL
    // Una vez completada la Promesa, se almacena en respuesta y a su vez se tranforma en tipo JSON
    return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());
};

// Exportar constante listaCliente la cual se almacena en un objeto clientServices
export const clientServices ={
    listaClientes,
};



