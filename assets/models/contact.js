const mongoose = require('mongoose')

let ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  website:{
    type: String
  },
  adress:{
    type: String
  },
  note:{
    type: String
  }
})

module.exports = mongoose.model('Contact', ContactSchema)
