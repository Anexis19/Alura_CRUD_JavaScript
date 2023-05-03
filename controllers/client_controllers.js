import { clientServices } from "../service/client-service.js";

// Template Generado para la creacion de una nueva linea de la tabla en cuanto se registre un usuario
const crearNuevaLinea =(nombre, email,id)=>{


    // Instruccion que permite la creacion de un elemento TR
    const linea = document.createElement("tr");

    // Ingreso de informacion de los parametros a el contenido

    // Paso de id mediante URL para editar la informacion del cliente
    const contenido =
    `<tr>
        <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id="${id}"> Eliminar </button>
            </li>
        </ul>
        </td>
    </tr>`;
    // Instruccion que permite crear el elemento HTML TR, que a su vez, crea las etiquetas HTML de la constante CONTENIDO
    linea.innerHTML = contenido;

    // Instruccion que permite leer el boton eliminar que se seleccione
    const btn = linea.querySelector("button");
    btn.addEventListener("click",()=>{
        const id = btn.id
        // Promesa que hace uso de la peticion HTTP generada en CLIENT_SERVICE, cual elimina el registro con el id enviado
        clientServices.eliminarCliente(id).then(respuesta =>{
            console.log(respuesta);
        }).catch((error)=> alert("Error al eliminar el usuario"));
    })

    // Retorno de constante linea
    return linea;
}

// Constante que permite recorrer todos los elementos del DOM y encontrar el media = data-table
const table = document.querySelector("[data-table]")


// Llamado a las condiciones a partir del http.status. En caso de que la peticion sea correcta, se desplegara la informacion contenida en el THEN, de lo contrario, sera en CATH
clientServices.listaClientes().then((data)=>{
    // Ciclo que permite recorrer el Array data, el cual tiene la informacion de la base de datos montada en el servidor JSON
    data.forEach(({nombre,email,id}) => {

        // Constante que permite llamar la funcion crearNuevaLinea la cual a su vez permite crear los elementos HTML con la informacion obtenida de la base de datos JSON
        const nuevaLinea = crearNuevaLinea(nombre,email,id);

        // El metodo appendChild permtie crear un nuevo elemento debajo del Padre. Es decir, la constnate nuevaLinea retorna el elemento TR con la
        // informacion HTML y los parametros establecidos. y posteriormente, el metodo appendChild imprime esta informacion luego del elemento padre
        table.appendChild(nuevaLinea);
    });
}).catch((error)=>alert("Error en la carga de los datos"));

