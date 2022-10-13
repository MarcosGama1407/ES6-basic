const needle = require('needle')

const endpoint ="https://cat-fact.herokuapp.com/facts"

const f = async ()=>{
    try{
        const response = await needle('get' , endpoint)
        response.body.forEach(cat => {
            console.log(cat.text)
            console.log('---------------------')
        });
    }catch(error){
        fallo(error)
    }
}

//Funcion callback: exito
const exito = (response) => {
    const paises = response
    paises.forEach(element => {
        console.log(`Pais: ${element.name.common}`)
        console.log('---------------------')
    });
}

//Funcion callback: fallo
const fallo = (status) => {
    console.log(status)
}

f()