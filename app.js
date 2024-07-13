const express = require('express')
const app = express()
const phonebookModel = require("./index")

app.get('/', (req,res)=>{
  res.send("hello")
})

app.get('/create', async(req, res)=>{
  let phonebookdata = await phonebookModel.create({
   id:3,
   name:"Arto Vihavainen",
   number: 45-1232456
  })
  res.send(phonebookdata)
 })

 app.get('/delete', async(req, res)=>{
  let phonebookDeletedData = await phonebookModel.findOneAndDelete({name:"Ada Lovelace"})
  res.send(phonebookDeletedData)
 })
 

app.listen(3000)