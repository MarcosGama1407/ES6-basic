const request = require('request')

const url="https://parallelum.com.br/fipe/api/v1/carros/marcas"

let r = request(url, {json: true} , function(error , response , body ){
    const names = response.body
    names.forEach(element => {
        console.log(`Nombre: ${element.nome}`)
        console.log('---------------------')
    });
})