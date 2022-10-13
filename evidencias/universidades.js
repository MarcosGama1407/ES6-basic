const needle = require('needle')

const endpoint ="https://restcountries.com/v3.1/all"

const f = async ()=>{
    try{
        const response = await needle('get' , endpoint)
        response.body.forEach(pais => {
            console.log(`Pais: ${pais.name.common}`)
            console.log('---------------------')
        });
    }catch(error){
        console.log(error)
    }
}

f()