const path = require('path')
const express = require('express')
const hbs = require('hbs')

const data = require('./utils/data')
const contacts = require('./utils/contacts')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000


app.get('', (req, res) => {
    res.render('index',{
        title: 'COVID-19 India' ,
        name: 'Saurabh Kumar'    
    })
})

app.get('/contact', (req,res) => {
    res.render('contact', {
        title: 'SUPPORT',
        name: 'Saurabh Kumar'
    })
})

app.get('/raw-data', (req, res) => {
    data((error,response) => {
        if(error){
            return res.send({error,})
        }
        res.send(response)
    })
})

app.get('/contact-detail', (req,res) => {
    contacts((error, response) => {
        if(error){
            return res.send({error,})
        }
        res.send(response)
    })
})

app.listen(port, () => {
    console.log('server is up on port ' +port)
})