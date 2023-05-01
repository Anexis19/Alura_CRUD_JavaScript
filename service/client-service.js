
const crearNuevaLinea =(nombre, email)=>{
    // Instruccion que permite la creacion de un elemento TR
    const linea = document.createElement("tr");

    // Ingreso de informacion de los parametros a el contenido
    const contenido =
    `<tr>
        <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button"> Eliminar </button>
            </li>
        </ul>
        </td>
    </tr>`;
    // Instruccion que permite crear el elemento HTML TR, que a su vez, crea las etiquetas HTML de la constante CONTENIDO
    linea.innerHTML = contenido;
    // Retorno de constante linea
    return linea;
}

// Constante que permite recorrer todos los elementos del DOM y encontrar el media = data-table
const table = document.querySelector("[data-table]")

console.log("CLIENT - SERVICE");
// Constante que establece una peticion XML HTTP
const http = new XMLHttpRequest();

// Se llama al metodo GET de XMLHttpRequest y a su vez, la url del servidor montado localmente con JSON-SERVER
http.open("GET","http://localhost:3000/perfil");
// Instruccion que se encarga de enviar la Anterior Peticion
http.send();

// Instruccion que indica que en cuanto se cargue la peticion XMLHttpRequest, realice una funcion
http.onload = ()=>{

    // Constante que almacena la respuesta proveniente del servidor en formato TEXTO y lo transforma a elemento JSON
    const data = JSON.parse(http.response);

    // Ciclo que permite recorrer el Array data, el cual tiene la informacion de la base de datos montada en el servidor JSON
    data.forEach(perfil => {

        // Constante que permite llamar la funcion crearNuevaLinea la cual a su vez permite crear los elementos HTML con la informacion obtenida de la
        // base de datos JSON
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);

        // El metodo appendChild permtie crear un nuevo elemento debajo del Padre. Es decir, la constnate nuevaLinea retorna el elemento TR con la
        // informacion HTML y los parametros establecidos. y posteriormente, el metodo appendChild imprime esta informacion luego del elemento padre
        table.appendChild(nuevaLinea);
    });
    console.log(data);
    // Crear una nueva peticion luego de que se haya cargador la primera. ESTRUCTURA ANIDADA
    const http2 = new XMLHttpRequest();
    http2.open("GET","http://localhost:3000/perfil/hoy");
    http2.send();
    http2.onload = ()=>{
        const data = JSON.parse(http2.response);
    }

}
