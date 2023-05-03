import { clientServices } from "../service/client-service.js";



const obtenerInformacion = () =>{
    // Instruccion que permite obtener informacion de la URL
    const url = new URL(window.location);
    // Obtencion de un dato en especifico de la URL
    const id = url.searchParams.get("id");
    console.log(id);


    if(id==null){
        // Redireccion a una pagina definida en caso de que la URL al momento de editar el usuario, no exista en el servidor
        window.location.href="/screens/error.html";
    }

    // Obtencion de la informacion del usuario. Se almacena el elemento HTML en si mismo
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    console.log(nombre, ' - ', email);

    // Llamado a la funcion creada en client_services y se pasa la id sobre la cual se va a obtener la informacion mediante una Promise
    clientServices.detalleCliente(id).then((perfil) => {
        // Obtencion del valor del campo HTML y se almacena en el perfil
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
}


obtenerInformacion();