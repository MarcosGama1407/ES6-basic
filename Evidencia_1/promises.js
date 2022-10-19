const needle = require('needle')

const endpoint ="https://anime-facts-rest-api.herokuapp.com/api/v1"

needle('get', endpoint)
    .then((response)=>{
        return response.body.data
    })
    .then(( response )=>{
        response.forEach(element => {
            console.log(`Nombre_Anime: ${element.anime_name}`)
            console.log('---------------------')
        });
    })
    .catch((error)=>{
        console.error(error)
    })