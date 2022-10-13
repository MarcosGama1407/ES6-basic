const needle = require('needle')

const endpoint ="https://animechan.vercel.app/api/random"

const f = async ()=>{
    try{
        const response = await needle('get' , endpoint)
        console.log(response.body.quote)
    }catch(error){
        console.log(error)
    }
}

f()