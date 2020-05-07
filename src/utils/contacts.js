const request =require('request')

const contacts = ((callback) => {
    const url ='https://api.rootnet.in/covid19-in/contacts'
    request( { url: url, json: true }, (error,response) => {
        if(error){
            callback('Unable to connect to the server!! ',undefined)
        }
        else{
            callback(undefined, response)
        }
    })
})

module.exports = contacts

// contacts((error,data) => {
//     if(error){
//         return console.log(error)
//     }
//     console.log(data.body.data.contacts.primary)
// })