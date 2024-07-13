const express = require('express')
const app = express()
const phonebookModel = require("./index")

app.get('/', (req,res)=>{
  res.send("hello")
})

app.listen(3000)