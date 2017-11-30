const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
let app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.use(require('./assets/routes/contact.js'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contactsapp',{useMongoClient: true},()=>{
  console.log('Połączono z bazą')
})

app.get('*',(req, res)=>{
  res.redirect('/')
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Serwer nasłuchuje na porcie 3000')
})
