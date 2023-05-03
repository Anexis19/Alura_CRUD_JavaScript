import { clientServices } from "../service/client-service.js";

// Seleccion del elemento que contiene la informacion del formulario
const formulario = document.querySelector("[data-form]");


// Definicion de funcion asyncrona
const obtenerInformacion = async() =>{
    // Instruccion que permite obtener informacion de la URL
    const url = new URL(window.location);
    // Obtencion de un dato en especifico de la URL
    const id = url.searchParams.get("id");
    console.log(id);

    // Redireccion a una pagina definida en caso de que la URL al momento de editar el usuario, no exista en el servidor
    if(id==null){
        window.location.href="/screens/error.html";
    }


    // Obtencion de la informacion del usuario. Se almacena el elemento HTML en si mismo
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    console.log(nombre, ' - ', email);

    // Funcion Try Catch que solo funciona dentro de un FUNCION ANONIMA
    try {
        // Llamado asincrono a la funcion creada en client_services y se pasa la id sobre la cual se va a obtener la informacion mediante una Promise
        const perfil = await clientServices.detalleCliente(id)

        // Control de errores en el caso de que el perfil (nombre e email) sea invalido
        if(perfil.nombre && perfil.email){
            // Obtencion del valor del campo HTML y se almacena en el perfil mediante la funcion asincrona
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error();

        }



    } catch (error) {
        // console.log("Catch Error - ", error)
        alert("Se produjo un error en la carga de los datos");
        window.location.href = "/screens/error.html";
    }

};
obtenerInformacion();

formulario.addEventListener("submit",(evento)=>{
    // Instruccion que permite obtener informacion de la URL
    const url = new URL(window.location);
    // Obtencion de un dato en especifico de la URL
    const id = url.searchParams.get("id");
    // Evitar que el formulario trate de hacer la peticion
    evento.preventDefault();
    // Obtencion de la informacion del usuario. Se almacena el elemento HTML en si mismo
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre," - ",email);

    clientServices.actualizarCliente(nombre,email,id).then(()=>{
        window.location.href="/screens/edicion_concluida.html";
    })
})