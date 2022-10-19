const needle = require('needle')

const endpoint ="https://rickandmortyapi.com/api/character"

const f = async ()=>{
    try{
        const response = await needle('get' , endpoint)
        exito(response.body.results)
    }catch(error){
        fallo(error)
    }
}

//Funcion callback: exito
const exito = (response) => {
    const anime_name = response
    anime_name.forEach(element => {
        console.log(`Episodios: ${element.episode}`)
        console.log('---------------------')
    });
}

//Funcion callback: fallo
const fallo = (status) => {
    console.log(status)
}

f()