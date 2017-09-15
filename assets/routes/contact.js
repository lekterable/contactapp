let router = require('express').Router()
let Contact = require('../models/contact.js')
router.delete('/contact/:id',(req, res)=>{
  Contact.remove({_id:req.params.id}, (err)=>{
    if(err)
      throw err
    res.sendStatus(200)
  })
})
router.post('/contact',(req, res)=>{
  let newContact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    adress: req.body.adress,
    email: req.body.email,
    website: req.body.website,
    note: req.body.note
  })
  newContact.save((err, con)=>{
    if(err)
      throw err
    res.sendStatus(200)
  })
})
router.get('/contact',(req, res)=>{
  Contact.find({},(err, contacts)=>{
    if(err)
      throw err
    res.json(contacts)
  })
})
router.get('/contact/:id', (req, res)=>{
  Contact.findOne({_id:req.params.id}, (err, contact)=>{
    if(err)
     res.redirect('/')
    res.json(contact)
  })
})
router.put('/contact', (req, res)=>{
  Contact.findOneAndUpdate({_id:req.body._id},
  {
    $set: {
      name: req.body.name,
      phone: req.body.phone,
      adress: req.body.adress,
      email: req.body.email,
      website: req.body.website,
      note: req.body.note
    }
  },{new:true},(err, contact)=>{
    if(err)
      throw err
    res.json(contact)
  })
})

module.exports = router
