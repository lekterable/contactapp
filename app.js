const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
let app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.use(require('./assets/routes/contact.js'))

mongoose.connect('mongodb://192.168.0.11:27017/contactsapp',{useMongoClient: true},()=>{
  console.log('Połączono z bazą')
})

app.get('*',(req, res)=>{
  res.redirect('/')
})

app.listen(3000, ()=>{
  console.log('Serwer nasłuchuje na porcie 3000')
})
