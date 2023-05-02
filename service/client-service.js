

console.log("CLIENT - SERVICE");

// FUNCION QUE RETORNA LOS ELEMENTOS ALMACENADOS EN DB.JSON

// Funcion que permite ejecutar promesas que a su vez, ejecutaran peticiones al servidor
const listaClientes = () =>fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

    // Uso de la funcion FETCH API la cual, de igual manera, retorna una Promise. Fetch establece una conexion con la URL
    // Una vez completada la Promesa, se almacena en respuesta y a su vez se tranforma en tipo JSON




// FUNCION QUE ENVIA LOS REGISTROS GENERADOS
const crearCliente = (nombre, email) =>{


    // FETCH API que realiza la solicitud al servidor, mediante el METODO POST
    return fetch("http://localhost:3000/perfil",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Envio de objeto Formateado en texto para ser enviado mediante HTTP. De igual manera, se genera un ID unico el cual se hace gracias a la libreria uuid
        body: JSON.stringify({nombre, email,id:uuid.v4()})
    })
}
// FUNCION QUE PERMITE ELIMINAR EL CLIENTE MEDIANTE EL ID
const eliminarCliente=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",

    })
}


// Exportar constante listaCliente la cual se almacena en un objeto clientServices
export const clientServices ={
    listaClientes,
    crearCliente,
    eliminarCliente,
};
