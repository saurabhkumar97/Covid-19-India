const request = require('request')

const data = ((callback) => {
    const url = 'https://api.covid19india.org/data.json'
    request ({url: url, json: true}, (error,response) => {
        if(error){
            return callback('Not able to connect to server, Try again!!', undefined)
        }
        callback(undefined, response)
    })
})


module.exports= data