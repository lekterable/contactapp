const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
let app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.use('/api', require('./routes/contact.js'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contactsapp',{useMongoClient: true},()=>{
  console.log('Connected to the database')
})

app.get('*',(req, res)=>{
  res.redirect('/')
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Server is running on port 3000')
})
