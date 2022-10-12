const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url="https://pokeapi.co/api/v2/type"

//Funcion para conectar a una api
//en modo asincrono
const get_data = ( endpoint , exito , fallo ) => {
    //1. Crear el objeto xmlhttp:
    const h = new xmlHttpRequest();
    //2. Establecer una conexion a la API
    h.open('GET' , endpoint)
    //3. Enviar la request a server(API)
    h.send()
    //4. Tratar los datos de la response
    h.onload = ()=>{
        if(h.status === 200 ){
            exito(h.responseText)   
        }else{
            fallo(h.status)
        }
    }
}

//Funcion callback: exito
const exito = (response) => {
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------')
    });
}

//Funcion callback: fallo
const fallo = (status) => {
    console.log(status)
}

//Invocar la función
get_data(url, exito, fallo)