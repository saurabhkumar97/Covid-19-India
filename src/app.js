const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const viewsPath= path.join(__dirname,'../templates/views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {

})