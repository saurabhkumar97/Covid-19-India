const path = require('path')
const express = require('express')
const hbs = require('hbs')

const data = require('./utils/data')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT


app.get('', (req, res) => {
    res.render('index',{
        title: 'COVID-19 India' ,
        name: 'Saurabh Kumar'    
    })
})

app.get('/support', (req,res) => {
    res.render('Support', {title: 'Hi'})
})

app.get('/raw-data', (req, res) => {
    data((error,response) => {
        if(error){
            return res.send({error,})
        }
        res.send(response)
    })
})


app.listen(port, () => {
    console.log('server is up on port ' +port)
})