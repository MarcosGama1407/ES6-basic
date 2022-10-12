const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url="https://pokeapi.co/api/v2/type"

//Funcion para conectar a una api
//en modo asincrono
const get_data = ( endpoint) => {
    //Definir la promesa:
    let promise = new Promise((resolve , rejected)=>{
            //1. Crear el objeto xmlhttp:
            const h = new xmlHttpRequest();
            //2. Establecer una conexion a la API
            h.open('GET' , endpoint)
            //3. Enviar la request a server(API)
            h.send()
            //4. Tratar los datos de la response
            h.onload = ()=>{
                if(h.status === 200 ){
                    resolve(h.responseText)   
                }else{
                    rejected(h.status)
                }
            }
    })
    return promise
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
get_data(url).then((data)=>{
    exito(data)
})