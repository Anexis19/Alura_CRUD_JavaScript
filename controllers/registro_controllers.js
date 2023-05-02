// Importacion de servicio creado en el client_services
import { clientServices } from "../service/client-service.js";


// Seleccion del elemento que almacena la informacion del formulario
const formulario = document.querySelector("[data-form]");

// Evento que se desencadena una vez se hace el SUBMIT proveniente del formulario
formulario.addEventListener("submit",(evento) => {

    // Previene el funcionamiento del formulario
    evento.preventDefault();
    // Almancenamiento de datos ingresado en el input nombre
    const nombre = document.querySelector("[data-nombre]").value;
    // Almancenamiento de datos ingresado en el input email
    const email = document.querySelector("[data-email]").value;
    console.log("Formulario: ",nombre," - ",email);

    // Promise que crea el cliente con los datos ingresados por el usuario
    clientServices.crearCliente(nombre,email).then((respuesta) => {

        // Redireccion a pestaña determinada
        window.location.href ="/screens/registro_completado.html";
    }).catch((error)=>alert("Error en el registro del cliente"));
});

